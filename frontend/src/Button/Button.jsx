
import "./Button.css"
const Button = ({text, classArray="b1"}) =>{

    return(
        <button className={classArray}>{text}</button>
    )
}

export default Button;