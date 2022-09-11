import clsx from 'clsx';

export default function Container(props) {

    const { children, className, ...rest } = props;
    const classes = clsx({
        "ui-container": true,
        "dark": props.theme === 'dark',
        "light": props.theme === 'light'
    });
    
    return <div className={classes} {...rest} >{children}</div>;
};
