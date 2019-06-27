import React, {Component} from "react"
import Data from "./data.json"
import SuperHero from "./SuperHero"
import "./style.css"

const App = () => {
   
    const mappedHeros = Data.map((hero, i) => {
        return (
            <SuperHero
             key={i}
             name={hero.name}
             show={hero.show}
             catchPhrase={hero.catchPhrase}
             imageName={hero.imageName}/>)
    })
    // const mappedMap = mappedHeros.map(hero => <h1></h1>)
    
    return(
    <div className="highDiv">
        {mappedHeros}
    </div>
    )   
}

export default App