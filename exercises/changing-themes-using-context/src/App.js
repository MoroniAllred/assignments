import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"
import {withTheme} from "./context/Theme.js"
import "./style.css"

const App = (props) => {
    return(
        <div className={`app theme-${props.theme}`}>
            <Header/>
            <Main/>
            <button onClick={props.changeTheme}>Change theme</button>
            <Footer/>
        </div>
    )
}

export default withTheme(App)