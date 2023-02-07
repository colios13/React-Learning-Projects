import React from "react";
import Dice from "./Dice";
import Confetti from 'react-confetti'

function Main() {
    const [dice, setDice] = React.useState(createAllDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const firstValue = dice[0].number
        const allSameValue = dice.every(die => die.number === firstValue)
        if (allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function createAllDice() {
        let allDice = []
        for (let j = 0; j < 10; j++) {
            allDice.push({
                id: j, 
                number: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        }
        return allDice
    }

    function holdDice(id) {
        setDice(oldDices => 
            oldDices.map(dice => ({
                ...dice,
                isHeld: dice.id === id ? !dice.isHeld : dice.isHeld
            }))
        )
    }

    function rollDice() {
        setDice(oldDices => 
            oldDices.map(dice => ({
                ...dice,
                number: dice.isHeld ? dice.number : Math.ceil(Math.random() * 6)
            }))
        )
    }

    const diceElements = dice.map((dice) => 
        <Dice 
            key={dice.id} 
            id={dice.id} 
            number={dice.number} 
            isHeld={dice.isHeld}
            holdDice={holdDice} />
    )

    return ( 
        <main className="main">
            {tenzies && <Confetti numberOfPieces={2500} tweenDuration={50000} recycle={false} />}
            <h1 className="main--title">Tenzies</h1>
            <p className="main--instructions">
                Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
            <section className="main--dice-container">
                {diceElements}
            </section>
            <button className="main--roll-dice" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
                
        </main>
     );
}

export default Main;