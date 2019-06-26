import React from "react"

function Die(props){
    const mappedRoll = props.number.map(box => <h3 className="diceBoxDiv">{box}</h3>)
    // props.map()
    
    return(
        <div className="flexDice">
            {mappedRoll}
        </div>
    )
}

export default Die