const Button = ({className, text, icon}) => {
    return (
        <button className={className && className}>{icon && icon} {text && text}</button>
    )
}


export default Button;
