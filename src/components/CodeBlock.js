import '../assets/css/Code.css'

const CodeBlock = (props) => {
    return (
        <code className="code-wrapper">{props.children}</code>
    )

}

export default CodeBlock;