function Dice(props) {
    console.log(props.isHeld)
    return ( 
    <div className={props.isHeld ? "dice helded" : "dice"} 
        onClick={() => props.holdDice(props.id)}>
        <span className="dice--number">{props.number}</span>
    </div>
    );
}

export default Dice;