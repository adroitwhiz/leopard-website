import fetch from "node-fetch";
import { Project } from "sb-edit";
import { getParameters } from "codesandbox/lib/api/define";
import FormData from "form-data";

export default async (req, res) => {
  const { projectId } = req.query;

  let projectJSON: any;
  try {
    const url = `https://projects.scratch.mit.edu/${projectId}`;
    projectJSON = await fetch(url).then((res: any) => res.json());
  } catch (e) {
    console.error(e);
    return res
      .status(400)
      .json({ error: `Failed to load project with ID ${projectId}` });
  }

  try {
    const project = await Project.fromSb3JSON(projectJSON, {
      getAsset: async ({ md5, ext }) =>
        `https://assets.scratch.mit.edu/internalapi/asset/${md5}.${ext}/get/`,
    });

    const converted = project.toLeopard({});

    let files = {};

    for (const fileName in converted) {
      let content = converted[fileName];

      // Prepend index.html with a comment
      if (fileName === "index.html") {
        content = `<!--
  Congratulations! Your project has been converted to JavaScript!

  You should see a working preview of your project on the right side of
  the screen. If not, it means something went wrong.

  Your project's code is all stored in the files on the left side of the
  screen. You can edit the JavaScript code and your project will change.
  But you have to save your changes using File > Save or Ctrl+S on your
  keyboard before the project preview will update.
-->

${content}`;
      }

      // Prepend sprite JS files with eslint-disable
      if (/.+\/.+\.js/g.test(fileName)) {
        content = "/* eslint-disable require-yield, eqeqeq */\n\n" + content;
      }

      files[fileName] = { content, isBinary: false };
    }

    for (const target of [project.stage, ...project.sprites]) {
      for (const costume of target.costumes) {
        files[`${target.name}/costumes/${costume.name}.${costume.ext}`] = {
          content: costume.asset,
          isBinary: true,
        };
      }
      for (const sound of target.sounds) {
        files[`${target.name}/sounds/${sound.name}.${sound.ext}`] = {
          content: sound.asset,
          isBinary: true,
        };
      }
    }

    const formData = new FormData();
    formData.append("parameters", getParameters({ files }));

    const result = await fetch(
      "https://codesandbox.io/api/v1/sandboxes/define",
      {
        method: "POST",
        body: formData,
      }
    );

    res.status(200).json({ url: result.url });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
