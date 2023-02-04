import AirbnbLogo from "../pictures/airbnb-logo.png"

function Navbar() {
    return ( <nav>
        <img className="nav--logo" alt="airbnb logo" src={AirbnbLogo}/>
    </nav> );
}

export default Navbar;