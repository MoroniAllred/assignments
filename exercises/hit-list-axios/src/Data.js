import React from "react"

const Data = (props) => {

    return(
        <div style={{backgroundImage: `url(${props.image})`}} className="dataDiv">
            <p>{props.name}</p>
        </div>
    )
}

export default Data