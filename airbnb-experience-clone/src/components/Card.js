import KatieZaferes from "../pictures/katie-zaferes.png"
import Star from "../pictures/star.png"

function Card() {
    return ( 
        <div className="card">
            <img className="card--image" alt="Katie Zaferes smiling at the end of a triathlon" src={KatieZaferes}/>
            <div className="card--rating-country">
                <img className="card--star" alt="red star icon" src={Star}/>
                <span>5.0</span>
                <span className="grey">(6) • USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
     );
}

export default Card;