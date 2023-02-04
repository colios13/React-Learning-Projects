import Star from "../pictures/star.png"

function Card(props) {
    return ( 
        <div className="card">
            <img className="card--image" alt={props.imgAlt} src={props.imgSrc}/>
            <div className="card--rating-country">
                <img className="card--star" alt="red star icon" src={Star}/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
     );
}

export default Card;