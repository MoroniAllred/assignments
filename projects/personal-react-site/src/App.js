import React from "react"
import Navbar from "./components/Navbar.js"
import { Switch, Route } from "react-router-dom"
import Home from "./components/Home.js"
import ChuckNoris from "./components/ChuckNorisApi.js"
import Jokes from "./components/JokesApi.js"
import Footer from "./components/Footer.js"
import "./style.css"
import ChuckNorisProvider from "./context/ChuckNoriosProvider.js"
import JokesProvider from "./context/JokesProvider.js"

const App = () => {

    return(
        <div>
            <Navbar/>
            <ChuckNorisProvider>
                <JokesProvider>
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/chuckNorisApi" component={ChuckNoris}/>
                        <Route path = "/JokesApi" component={Jokes}/>
                    </Switch>
                </JokesProvider>
            </ChuckNorisProvider>
            <Footer/>
        </div>
    )
}

export default App