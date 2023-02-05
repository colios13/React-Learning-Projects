import ValleyPainting from "../valley-painting.png"

function Meme() {
    return (
        <main className='main'>
            <form className="form" method="POST" action="">
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
                <button className="form--submit">
                    Get a new meme image
                    <img className="form--submit-img" alt="valley painting" src={ValleyPainting} />
                </button>
            </form>
        </main>
     );
}

export default Meme;