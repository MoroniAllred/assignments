import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div id="fullHead">
            <Navbar/>
            <div id="head">
            <h1 id="headH1">Clean Blog</h1>
            <p id="headP">A Blopg Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}

export default Header