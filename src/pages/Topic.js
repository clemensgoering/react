import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import "../assets/css/App.css";
import "../assets/css/CustomBoot.css";

import React, { useState, useEffect } from "react";

import NavHeader from "../components/NavHeader";
import MainPanel from "../components/MainPanel";

import LoadingSpinner from "../components/Spinner";
import CodeBlock from "../components/CodeBlock";

const Topic = () => {
  const [isLoading, setLoading] = useState(true);
  const [showmore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState("Show More");

  var componentsCode = [
    "const Header = () => {",
    'return ( <div className="main-header"></div> ) }',
    "export default Header; }",
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (showmore) {
      setButtonText("Show Less");
    } else {
      setButtonText("Show More");
    }
  }, [showmore]);

  return (
    <>
      <NavHeader />
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <MainPanel className="main-panel" title="Further Topics">
            <p>
              Lets talk about the key elements and a few examples that should be
              known, starting with React.
              <br />
              Also some minor comments on the initial "helloworld" app that was
              created.
            </p>
            <Button
              onClick={() => {
                setShowMore(!showmore);
              }}
            >
              {buttonText}
            </Button>
          </MainPanel>
        )}

        {!showmore ? (
          ""
        ) : (
          <>
            <MainPanel className="main-panel" title="A Few Default App Folders">
              <p>
                <b>node_modules</b> - installed libraries
                <br />
                <b>public</b> - accessible folder for example for %PUBLIC%
                images
                <br />
                <b>src</b> - app development content
                <br />
                <b>package.json</b> - dependencies , script execution <br />
                <b>gitignor</b> - not commited / pushed to git
                <br />
              </p>
            </MainPanel>

            <MainPanel className="main-panel" title="General Build">
              <p>
                General Build:
                <p>
                  <b>index.js</b> is used as initial point for your application
                  containing the root element that is being rendered.
                  <br />
                  Starting with "App" component (StrictMode - highlighting -
                  causing useEffect to be triggered twice).
                </p>
              </p>
            </MainPanel>

            <MainPanel className="main-panel" title="Components">
              Example component that could be reused in the application.
              <p>
                <CodeBlock>
                  {componentsCode.map((item, index) => <>{item}<br/></>)}
                </CodeBlock>
              </p>
            </MainPanel>

            <MainPanel className="main-panel" title="Further Topics">
              Starter<br/>
              <ul>
                <li>Export default and specific (Components)</li>
                <li>Props and Child</li>
                <li>Routing (example useNavigate)</li>
              </ul>
              Further Topics<br/>
              <ul>
                <li>Hooks (“hook into” React state and lifecycle features from function components) & useEffect (Suspense and lazy)</li>
                <li> - Impact: Parent changes = reload child components</li>
                <li> - Solutions: useMemo (Memorize, cached copy = no change, no reload)</li>
                <li>Libraries (React, ReactDOM)</li>
                <li>Rendering: JSX - create Element (Memory), Commit: virtual DOM, compare Diff : no change = render</li>
              </ul>
            </MainPanel>
          </>
        )}
      </Container>
    </>
  );
};

export default Topic;
