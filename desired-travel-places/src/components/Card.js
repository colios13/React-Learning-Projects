import Marker from "../marker.png"

function Card(props) {
    return ( 
        <div className="card">
            <img className="card--image" alt={props.imageAlt} src={props.imageUrl}/>
            <div className="card--text">
                <div className="card--location">
                    <img className="card--marker" alt="marker" src={Marker}/>
                    <span>{props.country}</span>
                    <a className="grey" href="https://googlemaps.com">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;