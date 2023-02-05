import ValleyPainting from "../valley-painting.png"
import memesData from "../memesData";
import React from 'react';

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemesImages, setAllMemesImages] = React.useState({memesData})

    function getMemeImage() {
        const memesArray = allMemesImages.memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme({ 
            topText: "",
            bottomText: "",
            randomImage: memesArray[randomNumber].url
        })
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
            <img className="meme-img" alt="random popular meme" src={meme.randomImage} />
        </main>
     );
}

export default Meme;