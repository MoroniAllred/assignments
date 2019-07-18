import React from "react"
import Header from "./components/Header.js"
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Project from "./components/Projects.js"
import "./style.css"

const App = () => {
    return(
        <div className="app">
            <div className="appSpan">
                <Header/>
                <About/>
                <Project/>
                <Footer/>
            </div>
        </div>
    )
} 

export default App 