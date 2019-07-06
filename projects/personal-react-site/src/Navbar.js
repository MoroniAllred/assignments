import React from "react"
import { Link, withRouter } from "react-router-dom"

const Navbar = () => {

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/chuckNoris">Chuck Noris jokes</Link>
            <Link to="/dadJokes"> Dad jokes</Link>
        </div>
    )
}

export default withRouter (Navbar)