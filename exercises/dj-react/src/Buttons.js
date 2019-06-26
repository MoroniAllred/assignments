import React from "react"


function Buttons(props){


    return(
        <div>
            <button onClick={props.whiteToBlack}>White or Black.</button>
            <button onClick={props.topPurple}>Top to Purple</button>
            <button onClick={props.bottomLeftBlue}>Bottom left Blue</button>
            <button onClick={props.bottomRightBlue}>Bottom right Blue</button>
            <button onClick={props.topLeft}>Top left</button>
            <button onClick={props.topRight}>Top right</button>
            <button onClick={props.bottomLeft}>Bottom left</button>
            <button onClick={props.bottomRight}>Bottom right</button>
        </div>
    )
}

export default Buttons