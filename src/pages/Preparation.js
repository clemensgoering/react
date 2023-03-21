import Container from "react-bootstrap/esm/Container";
import "../assets/css/App.css";

import React, { useState, useEffect } from "react";

import NavHeader from "../components/NavHeader";
import MainPanel from "../components/MainPanel";

import LoadingSpinner from "../components/Spinner";
import CodeBlock from "../components/CodeBlock";
const Preparation = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <NavHeader />
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <MainPanel className="main-panel" title="Setup App">
            <p>
              In general, <CodeBlock>npx create-react-app helloworld</CodeBlock> will
              be sufficient to simply create a default react application.
            </p>
            <p>
              In case you are interested in already using UI5 Web Component
              template based applications, kindly check:{" "}
              <a href="https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs">
                UI Web Components
              </a>
            </p>
            <p>
              Basic Template Application:
              <br />
              <CodeBlock>
                npx create-react-app my-app --template @ui5/webcomponents-react
              </CodeBlock>
            </p>
            <p>
              Advanced Template Application:
              <CodeBlock>
                npx create-react-app my-app --template
                @ui5/webcomponents-react-seed
              </CodeBlock>
            </p>
            <p>
              To start your application, enter <CodeBlock>npm start</CodeBlock>{" "}
              in your terminal. (New instance will be created and published at
              default localhost:3000 location. Pending on config or the number
              of running instances)
            </p>
            In case you have made any script configuration in your package.json
            file, starting the application depends on your setup. For example,{" "}
            <CodeBlock>npm run start</CodeBlock> will trigger the start script
            configuration you maintained.

          </MainPanel>
        )}
      </Container>
    </>
  );
};

export default Preparation;
