import ValleyPainting from "../valley-painting.png"
import React, {useEffect} from 'react';

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemesImages, setAllMemesImages] = React.useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => setAllMemesImages(() => data.data.memes));
    }, [])

    console.log(allMemesImages)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemesImages.length)
        setMeme((prevData) => {
            return { 
                topText: prevData.topText,
                bottomText: prevData.bottomText,
                randomImage: allMemesImages[randomNumber].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme((prevData) => ({
                ...prevData,
                [name]: value,
            })
        )
    }

    return (
        <main className='main'>
            <div className="form">
                <div className="form--input-text">
                    <input className="input-text" 
                        id="top-sentence" 
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                    />
                    <input className="input-text" 
                        id="bottom-sentence" 
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </div>
                <button className="form--submit" onClick={getMemeImage}>
                    Get a new meme image
                    <img className="form--submit-img" alt="valley painting" src={ValleyPainting} />
                </button>
            </div>
            <div className="meme">
                <img className="meme--img" alt="random popular meme" src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
     );
}

export default Meme;