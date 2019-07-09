import React from "react"
import Navbar from "./components/Navbar.js"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home.js"
import ChuckNoris from "./components/ChuckNorisApi.js"
import DadJokes from "./components/DadJokesApi.js"
import Footer from "./components/Footer.js"
import "./style.css"

const App = () => {

    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route path = "/chuckNorisApi" component={ChuckNoris}/>
                <Route path = "/dadJokesApi" component={DadJokes}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App