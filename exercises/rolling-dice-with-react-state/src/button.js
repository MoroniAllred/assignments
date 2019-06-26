import React from "react"

function Button(props){

    return(
        <button onClick={props.diceRoll} className="button">Roll!</button>
    )
}

export default Button