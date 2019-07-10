import React from "react"

const JokesText = (props) => {
    return(
        <div>
            <h3 className="jokes">{props.jokes}</h3>
            <h3 className={`punchline punchline-${props.punchShow}`}>{props.punchline}</h3>
        </div> 
    )
}

export default JokesText