import TrollFace from "../troll-face.png"

function Header() {
    return ( 
        <header className="header">
            <div className="header--title">
                <img className="header--icon" alt="troll face" src={TrollFace} />
                <p className="header--name">Meme Generator</p>
            </div>
            <p className="header--lesson">React Course - Project 3</p>
        </header>
     );
}

export default Header;