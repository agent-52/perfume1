
import "./Button.css"
const Button = ({text, classArray="b1 sm0"}) =>{

    return(
        <button className={classArray}>{text}</button>
    )
}

export default Button;