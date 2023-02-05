import ValleyPainting from "../valley-painting.png"

function Form() {
    return ( 
        <form className="form" method="POST" action="">
            <div className="form--input-text">
                <input id="top-sentence" type="text" />
                <input id="bottom-sentence" type="text" />
            </div>
            <button className="form--submit">
                Get a new image
                <img className="form--submit-img" alt="valley painting" src={ValleyPainting} />
            </button>
        </form>
     );
}

export default Form;