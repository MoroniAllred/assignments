import React from "react"
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import Services from "./Services.js"
import About from "./About.js"
import Footer from "./Footer.js"
import { Switch, Route } from "react-router-dom"
import "./style.css"

function App(){

    return(
        <div>
            <Navbar/>
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/services" component={Services}/>
                    <Route path = "/about" component={About}/>
                </Switch>
            <Footer/>
        </div>
    )
}

export default App