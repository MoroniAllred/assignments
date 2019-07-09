import React from "react"
import { Link, withRouter } from "react-router-dom"

const Navbar = () => {

    return(
        <div className="navbarDiv">
            <Link to="/">Home</Link>
            <Link to="/chuckNorisApi">Chuck Noris jokes</Link>
            <Link to="/dadJokesApi"> Dad jokes</Link>
        </div>
    )
}

export default withRouter (Navbar)