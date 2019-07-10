import React from "react"
import JokesText from "./appGrandchildren/JokesText.js"
import {withJokes} from "../context/JokesProvider.js"


const JokesApi = (props) => {
        return(
            <div className="jokesApiDiv">
                <JokesText jokes={props.jokes}
                            punchline={props.punchline}
                            punchShow={props.punchShow}/>
                <button onClick={props.handleJokesClick} className="jokesButton">New Joke!</button>
                <button onClick={props.showPunchline} className={`punchButton punchButton-${props.jokesPunchButton}`}>Get puchline!</button>
                <button onClick={props.saveToJokesFavorits} className={`jokeFav jokeFav-${props.punchShow}`}>Put in favorits!</button>
            </div>
        )
}

export default withJokes(JokesApi)