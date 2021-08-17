import Center from "../../components/Center";
import Nav from "../../components/Nav";
import Title from "../../components/Title";
import TopBorder from "../../components/TopBorder";

export default function PublishWithVercel() {
  return (
    <>
      <Title>Publish your project as a website</Title>

      <TopBorder />

      <Center>
        <Nav />

        <h2 className="mt-8 mb-4 text-4xl font-bold text-gray-800">
          Publish your project as a website!
        </h2>
        <InfoBox>
          In the{" "}
          <a
            href="https://www.youtube.com/watch?v=qmM9OPWG5W4"
            target="_blank"
            className="font-semibold text-blue-600 hover:underline"
          >
            original Leopard demo video
          </a>
          , I published my website using Netlify. Since then, I've found that
          Vercel is actually a better choice for most people, so that's what
          we'll use here.
        </InfoBox>
        <Step number={1} title="Register for a Github account">
          <p>
            If you don't already have a Github account, head to{" "}
            <a
              href="https://github.com/"
              target="_blank"
              className="font-semibold text-indigo-700 hover:underline"
            >
              github.com
            </a>{" "}
            and register.
          </p>
          <InfoBox>
            Github is a free service that stores text-based code, and it's used
            to sign in to both CodeSandbox and Vercel.
          </InfoBox>
        </Step>
        <Step number={2} title="Sign in to CodeSandbox">
          <p>
            If you haven't already, sign in to CodeSandbox using your Github
            account.
          </p>
          <img
            src="/help/publish-with-vercel/2-sign-in-codesandbox.png"
            alt="Click the blue sign in button in the top right of CodeSandbox"
          />
        </Step>
        <Step
          number={3}
          title={
            <>
              In your project, create a file called{" "}
              <code className="px-2 py-1 -my-1 font-normal bg-gray-200 rounded">
                package.json
              </code>
            </>
          }
        >
          <img
            src="/help/publish-with-vercel/3-create-package-json.png"
            alt="Create a file named package.json"
          />
        </Step>
        <Step
          number={4}
          title={
            <>
              Replace the content of{" "}
              <code className="px-2 py-1 -my-1 font-normal bg-gray-200 rounded">
                package.json
              </code>{" "}
              with the following
            </>
          }
        >
          <p>Be sure to save your changes!</p>
          <pre className="bg-gray-200 rounded">
            <div className="border-t-4 border-gray-400">
              <span
                className="inline-block px-4 py-2 bg-gray-400 select-none rounded-br-md"
                style={{ marginTop: -4 }}
              >
                package.json
              </span>
            </div>
            <code className="block p-4">
              {`{
  "scripts": {
    "build": "cp -R . ../public && mv ../public public"
  }
}`}
            </code>
          </pre>
          <p>This build script tells Vercel how to deploy your code.</p>
        </Step>
        <Step
          number={5}
          title={'Open the "Deployment" tab in the CodeSandbox sidebar'}
        >
          <img
            src="/help/publish-with-vercel/5-deployment-tab.png"
            alt="Click the deployment tab in CodeSandbox"
          />
          <p>
            If you haven't made any changes to the code, there will be a "Fork
            Sandbox" button that you need to click before moving on.
          </p>
        </Step>
        <Step number={6} title="Sign in to Vercel">
          <img
            src="/help/publish-with-vercel/6-sign-in-vercel.png"
            alt="Click the sign in button inside CodeSandbox to sign in with Vercel"
          />
          <p>
            Follow the sign-in process using your Github account. When prompted,
            click the "Authorize" button to connect CodeSandbox to Vercel.
          </p>
        </Step>
        <Step
          number={7}
          title={'Click "Deploy with Vercel", then "Deploy Sandbox"'}
        >
          <img
            src="/help/publish-with-vercel/7-deploy-with-vercel.png"
            alt={`Click the button titled "Deploy with Vercel"`}
          />
          <img
            src="/help/publish-with-vercel/7-deploy-sandbox.png"
            alt={`Click the button titled "Deploy Sandbox"`}
          />
          <p>Congratulations! Your project has been deployed.</p>
        </Step>
        <Step number={8} title="View your deployment">
          <p>
            Click anywhere outside the popup box to close it. Then, click "Visit
            Site" to view your deployment.
          </p>
          <img
            src="/help/publish-with-vercel/8-visit-site.png"
            alt="Click the Visit Site button"
          />
        </Step>
        <Step number={9} title="Change your domain name">
          <p>
            The randomly-generated domain name probably isn't what you want. To
            change it, head to the Vercel dashboard at{" "}
            <a
              href="https://vercel.com/dashboard"
              target="_blank"
              className="font-semibold text-indigo-700 hover:underline"
            >
              vercel.com/dashboard
            </a>
            .
          </p>
          <p>Then, click on the name of your project.</p>
          <img
            src="/help/publish-with-vercel/9-click-project-name.png"
            alt="Click on the name of your project to open it"
          />
          <p>Click on the "Settings" tab.</p>
          <img
            src="/help/publish-with-vercel/9-settings-tab.png"
            alt="Go to the settings tab"
          />
          <p>Open the "Domains" page and click "Edit" on your curent domain.</p>
          <img
            src="/help/publish-with-vercel/9-domains-edit.png"
            alt="Click on domains, then edit"
          />
          <p>Change your domain name to something better, then click "Save".</p>
          <img
            src="/help/publish-with-vercel/9-change-domain.png"
            alt="Edit the domain name, preserving .vercel.app, then click Save"
          />
          <p>Finally, click on your new domain name to check it out!</p>
          <img
            src="/help/publish-with-vercel/9-visit-domain.png"
            alt="Visit your domain!"
          />

          <InfoBox>
            <p>
              It's also possible to choose a domain that does not end in
              <strong>.vercel.app</strong>.
            </p>
            <p>
              Vercel provides the following endings for free:
              <ul className="ml-4 list-disc list-inside">
                <li>
                  <i>your-chosen-name</i>
                  <strong>.vercel.app</strong>
                </li>
                <li>
                  <i>your-chosen-name</i>
                  <strong>.now.sh</strong>
                </li>
              </ul>
            </p>
            <p>
              If you want something else, like a .com or .dev domain, you'll
              need to pay money — usually about $12/year. I recommend using{" "}
              <a
                href="https://domains.google/"
                target="_blank"
                className="font-semibold text-blue-600 hover:underline"
              >
                Google Domains
              </a>{" "}
              because they're cheap and honest. (Other domain providers might
              try to increase prices without telling you. Be careful!)
            </p>
            <p>
              For more information, check out the{" "}
              <a href="https://vercel.com/docs/v2/custom-domains">
                Vercel documentation
              </a>
              .
            </p>
          </InfoBox>
        </Step>
      </Center>

      <style jsx>
        {`
          img {
            margin: 16px 0;
            border-radius: 4px;
          }
          p {
            margin: 16px 0;
          }
        `}
      </style>
    </>
  );
}

function InfoBox({ children }) {
  return (
    <div className="p-4 my-8 text-blue-900 bg-blue-100 border border-blue-300 rounded">
      <h4 className="flex items-center mb-2 font-semibold text-blue-600">
        <svg
          className="inline-block w-5 h-5 mr-2 text-white bg-blue-600 rounded-full"
          viewBox="0 0 20 20"
        >
          <line
            x1="10"
            y1="5"
            x2="10"
            y2="7"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="9"
            x2="10"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        Info
      </h4>
      {children}
    </div>
  );
}

function Step({ title, number, children }) {
  return (
    <div>
      <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-700">
        <div className="inline-flex items-center justify-center w-10 h-10 mr-4 text-xl text-white bg-indigo-600 rounded-full">
          {number}
        </div>
        {title}
      </h3>

      <div className="pl-4 ml-10">{children}</div>
    </div>
  );
}
