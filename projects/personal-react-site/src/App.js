import React from "react"
import Navbar from "./Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./Home.js"
import ChuckNoris from "./ChuckNoris.js"
import DadJokes from "./DadJokes.js"
import Footer from "./Footer.js"

const App = () => {

    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route path = "/chunkNoris" component={ChuckNoris}/>
                <Route path = "/dadJokes" component={DadJokes}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App