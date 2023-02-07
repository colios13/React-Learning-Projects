import Dice from "./Dice";

function Main() {
    let allDice = []
    for (let j = 0; j < 10; j++) {
        allDice.push(<Dice key={j} number={Math.floor(Math.random()*6)} />)
    }

    return ( 
        <main className="main">
            <div className="main--content">
                <h2 className="main--title">Tenzies</h2>
                <section className="main--dice-container">
                    {allDice}
                </section>
            </div>
        </main>
     );
}

export default Main;