import PhotoGrid from "../pictures/photo-grid.png"

function Hero() {
    return ( 
        <section className="hero">
            <img className="hero--photo" alt="multiple random photos" src={PhotoGrid}/>
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
     );
}

export default Hero;