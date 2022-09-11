import clsx from 'clsx';

export default function Container(props) {
    const className = clsx({
        "ui-container": true,
        "dark": props.theme === 'dark',
        "light": props.theme === 'light'
    });
    
    return <div className={className} >{props.children}</div>;
}
