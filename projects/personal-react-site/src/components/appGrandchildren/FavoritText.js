import React from "react"

const FavoritText = (props) => {

    return(
        <div key={props.i}>
            <span >
                <h3>{props.joke}</h3>
                <h3 className="favedJoke">{props.punchline}</h3>
                
            </span>
            <span >
                <h3 className="favedJoke">{props.chuck}</h3>
            </span>
                <button onClick={props.remove} id={props.id}>Remove Favorite</button>
        </div>
    )
}

export default FavoritText