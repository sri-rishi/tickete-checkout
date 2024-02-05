const Button = ({className, text, icon}) => {
    return (
        <button className={className && className}>{text && text}{icon && icon}</button>
    )
}


export default Button;
