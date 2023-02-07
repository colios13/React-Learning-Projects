import Dice from "./Dice";

function Main() {
    let allDice = []
    for (let i = 0; i < 2; i++) {
        let inlineDice = []
        for (let j = 0; j < 10; j++) {
            inlineDice.push(<Dice key={i*10+j} number={Math.floor(Math.random()*6)} />)
        }
        allDice.push(inlineDice)
    }

    return ( 
        <main className="main">
            <h2>Tenzies game</h2>
            <section className="main--dice-container">
                <div className="main--inline-dice">
                    {allDice[0]}
                </div>
                <div className="main--inline-dice">{allDice[1]}</div>
            </section>
        </main>
     );
}

export default Main;