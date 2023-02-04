import emailIcon from "../pictures/email-icon.png"
import linkedinIcon from "../pictures/linkedin-icon.png"

function Info() {
    return (
        <div className="info">
            <h1 className="info-name">Corentin Laparre</h1>
            <p className="info-job">Python Junior Developer</p>
            <p className="info-website">portofolio in progress</p>
            <div className="info-button">
                <button className="info-button-email">
                    <a href="mailto:corentin.laparre@gmail.com">       
                        <img alt="Email icon" src={emailIcon}/>
                        <p className="info-button-email-text">Email</p>
                    </a>
                </button>
                <button className="info-button-linkedin">
                    <a href="https://fr.linkedin.com/in/corentin-laparre">    
                        <img alt="Linkedin icon" src={linkedinIcon}/>
                        <p className="info-button-linkedin-text">Linkedin</p>
                    </a>
                </button>
            </div>
        </div>
     );
}

export default Info;