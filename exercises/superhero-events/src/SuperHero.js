import React from "react"

const SuperHero = (props) => {

    return(
        <div className="heros" onClick = { () =>  alert(props.catchPhrase) }>
            <h1>{props.name}</h1>
            <h3>From the {props.show}</h3>
            <img src= {props.imageName} className="heroImg"/>
        </div>
    )
}

export default SuperHero