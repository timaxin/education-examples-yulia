import '../styles/Button.css';

function Button({ onClick, className, disabled, children }) {
    return(
        <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
    );
}

export default Button;