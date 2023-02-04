import twitterIcon from "../pictures/twitter-icon.png"
import facebookIcon from "../pictures/facebook-icon.png"
import githubIcon from "../pictures/github-icon.png"

function Footer() {
    return ( 
        <div className="footer">
            <img alt="twitter icon" src={twitterIcon}/>
            <img alt="facebook icon" src={facebookIcon}/>
            <a href="https://github.com/colios13"><img alt="github icon" src={githubIcon}/></a>
        </div>
     );
}

export default Footer;