import ValleyPainting from "../valley-painting.png"
import memesData from "../memesData";
import React from 'react';

function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main className='main'>
            <div className="form">
                <div className="form--input-text">
                    <input className="input-text" 
                        id="top-sentence" 
                        type="text"
                        placeholder="Top text"
                    />
                    <input className="input-text" 
                        id="bottom-sentence" 
                        type="text"
                        placeholder="Bottom text"
                    />
                </div>
                <button className="form--submit" onClick={getMemeImage}>
                    Get a new meme image
                    <img className="form--submit-img" alt="valley painting" src={ValleyPainting} />
                </button>
            </div>
            <img className="meme-img" alt="random popular meme" src={memeImage} />
        </main>
     );
}

export default Meme;