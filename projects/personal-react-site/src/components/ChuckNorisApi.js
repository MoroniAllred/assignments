import React from "react"
import ChuckNorisText from "./appGrandchildren/ChuckNorisText.js"
import {withChuckNoris} from "../context/ChuckNoriosProvider.js"

const ChuckNorisApi = (props) =>{
    
    return(
        <div className="chuckApiDiv">
            <ChuckNorisText chuckJoke={props.chuckJoke}/>
            <span className="buttons">
                <button onClick={ props.handleChuckClick} className="chunkButton">New Joke!</button>
                <button onClick={ props.saveToChuckFavorit} className={`buttonIs-${props.favorit} chunkButton`}>Save to favorits!</button>
            </span>
        </div>
    )
}


export default withChuckNoris(ChuckNorisApi)