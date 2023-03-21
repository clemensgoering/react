import Accordion from 'react-bootstrap/Accordion';

function MainPanel(props) {
  return (
    <Accordion defaultActiveKey="0" className={props.className}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>
          {props.children}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default MainPanel;