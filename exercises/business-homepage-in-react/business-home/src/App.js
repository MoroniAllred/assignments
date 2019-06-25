import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css"

function App(){
    return(
        <div className="appDiv">
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;