import React from "react"
import { Link, withRouter } from "react-router-dom"

const Navbar = () => {

    return(
        <div className="navbarDiv">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/chuckNorisApi" className="navLink">Chuck Noris jokes</Link>
            <Link to="/JokesApi" className="navLink"> Dad jokes</Link>
        </div>
    )
}

export default withRouter (Navbar)