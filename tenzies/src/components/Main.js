import React from "react";
import Dice from "./Dice";

function Main() {
    const [dice, setDice] = React.useState(createAllDice())

    function createAllDice() {
        let allDice = []
        for (let j = 0; j < 10; j++) {
            allDice.push({
                id: j, 
                number: Math.ceil(Math.random() * 6)
            })
        }
        return allDice
    }

    const diceElements = dice.map((dice) => 
        <Dice key={dice.id} number={dice.number} />
    )

    return ( 
        <main className="main">
            <div className="main--content">
                <h1 className="main--title">Tenzies</h1>
                <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls</p>
                <section className="main--dice-container">
                    {diceElements}
                </section>
            </div>
        </main>
     );
}

export default Main;