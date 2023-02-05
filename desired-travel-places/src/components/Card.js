import Marker from "../marker.png"

function Card(props) {
    return ( 
        <div className="card">
            <img className="card--image" alt={props.img.alt} src={props.img.url}/>
            <div className="card--text">
                <div className="card--location">
                    <img className="card--marker" alt="marker" src={Marker}/>
                    <span className="card--country">{props.location.country}</span>
                    <a className="card--maps-url grey" href={props.location.mapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;