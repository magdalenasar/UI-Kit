export default function Input(props) {
    // destructuring with default value
    const { type = "text", placeholder, name } = props;
    
    return <input className="ui-textfield" type={type} placeholder={placeholder} name={name} />;
}
