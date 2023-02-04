import Star from "../pictures/star.png"

function Card(props) {
    console.log(props)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return ( 
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" alt={props.item.altImg} src={props.item.coverImg}/>
            <div className="card--rating-country">
                <img className="card--star" alt="red star icon" src={Star}/>
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
     );
}

export default Card;