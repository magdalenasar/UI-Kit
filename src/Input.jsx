import clsx from "clsx";

export default function Input(props) {
    // destructuring with default value
    const {className, type = "text", ...rest} = props;
    const classes = clsx("ui-textfield", className);

    return <input className={classes} type={type} {...rest} />;
}
