import "./header.css"
const Header = () =>{

    return(
        <header className="">
            <div className="f1 sm1 lightBold">CARUM</div>
            <div className="f2 flex justifyBw w100 sm0">
                <div>FRAGNANCES</div>
                <div>CONTACT</div>
                <div>ABOUT</div>
                <div>ACCESSORIES</div>
            </div>
            <div className="flexC gap0">
                <div className="sticks"></div>
                <div className="sticks"></div>
                <div className="sticks"></div>
            </div>
        </header>
    )
}

export default Header