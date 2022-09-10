export default function Link(props) {
    const { children, href } = props;
    
    return <a className="ui-link" href={href}> {children} </a>;
}
