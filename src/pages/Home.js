import '../assets/css/App.css';
import '../assets/css/CustomBoot.css';
import '../assets/css/Main.css';

import terminal from '../assets/img/terminal.png';
import Container from 'react-bootstrap/Container';

import CodeBlock from '../components/CodeBlock';
import NavHeader from '../components/NavHeader';
import MainPanel from '../components/MainPanel';

const Home = () => {
  return (
    <>
    <NavHeader/>
    <Container>
        <MainPanel className="main-panel" title="Initial Step">
            <p>Make sure you have installed <a href="https://nodejs.org/en">Node.js</a><br/>
            (Can also be used in production but in our scenarios, used for the localhost environment to run your react applications)
            </p>
            <p>
            Node.js installation includes also npm (node package manager).<br/>
            In later npm versions, npm includes also npx – differences between these two are explained here.  <a href="https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/">npm & npx</a><br/>
            In general, the package manger & executer help to install libraries and dependencies as well as cover the install and execution steps.
            </p>

        </MainPanel>

        <MainPanel className="main-panel" title="Development Environment">
            <p>Personal recommendation VS Code</p>
            
            <a href="https://code.visualstudio.com/download">VS Code</a><br/>
            <a href="https://code.visualstudio.com/docs/nodejs/reactjs-tutorial">React Tutorial</a><br/>
            <a href="https://learn.microsoft.com/de-de/windows/dev-environment/javascript/react-beginners-tutorial">React Beginner Guide</a><br/>
            <p>
            Check the proper node installation by typing <CodeBlock>npm -v</CodeBlock> into the VS Code Terminal window.
            Terminal can be opened in the top. <br/>
            New section – on the right side, option to open or toggle between existing Terminal sessions.
            <p><img src={terminal} alt="terminal" className="default-img"/></p>
            
            </p>
            

        </MainPanel>
    </Container>
    </>
  );
}


export default Home;
