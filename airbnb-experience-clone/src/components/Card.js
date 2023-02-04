import Star from "../pictures/star.png"

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return ( 
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" alt={props.imgAlt} src={props.imgSrc}/>
            <div className="card--rating-country">
                <img className="card--star" alt="red star icon" src={Star}/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • {props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
     );
}

export default Card;