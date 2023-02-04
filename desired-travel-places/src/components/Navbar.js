import EarthIcon from "../earth-icon.png"

function Navbar() {
    return ( 
        <nav className="navbar">
            <img className="navbar--image" alt="earth icon" src={EarthIcon}/>
            <h3 className="navbar--text">my desired travel places</h3>
        </nav>
     );
}

export default Navbar;