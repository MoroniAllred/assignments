import React from "react"
import JokesText from "./appGrandchildren/JokesText.js"
import {withJokes} from "../context/JokesProvider.js"


const JokesApi = (props) => {

        return(
            <div className="dadApiDiv">
                <JokesText jokes={props.jokes}
                            punchline={props.punchline}/>
                <button onClick={props.handleJokesClick} className="dadButton">New Joke!</button>
                <button>Get puchline!</button>
                <button onClick={props.saveToJokesFavorits}>Put in favorits!</button>
            </div>
        )
}

export default withJokes(JokesApi)