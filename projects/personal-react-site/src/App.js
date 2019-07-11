import { Switch, Route } from "react-router-dom"
import React from "react"
import Navbar from "./components/Navbar.js"
// import Hamberger from "./components/Hamberger.js"
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import ChuckNoris from "./components/ChuckNorisApi.js"
import Jokes from "./components/JokesApi.js"
import Favorites from "./components/Favorites.js"
import "./style.css"


const App = () => {

    return(
        <div>
            <Navbar/>
            {/* <Hamberger/> */}
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route path = "/chuckNorisApi" component={ChuckNoris}/>
                    <Route path = "/JokesApi" component={Jokes}/>
                    <Route path = "/favorites" component={Favorites}/>
                </Switch>
            <Footer/>
        </div>
    )
}

export default App