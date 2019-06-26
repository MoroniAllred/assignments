import React from "react"

function Box(props){
    const boxStyle = {
        backgroundColor: props.color
    }
    return(
        <div className="box" style={boxStyle}>

        </div>
    )
}

export default Box