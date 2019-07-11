import React, {Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from  "@fortawesome/free-solid-svg-icons"
import { Link, withRouter } from "react-router-dom"

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            hambergerValue: false
        }
    }

    hambergerClick = () =>{
        this.setState(prevstate => {
            return{
                hambergerValue: !prevstate.hambergerValue
            }
        })
    }

    render(){
        return(
            <div className="tranitionDiv">
                <div className={`hamberlinks hambergerlinks-${this.state.hambergerValue}`}>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/chuckNorisApi" className="navLink">Chuck Noris jokes</Link>
                    <Link to="/JokesApi" className="navLink">Jokes</Link>
                    <Link to="/favorites" className="navLink">Favorites</Link>
                </div> 
                <div className="navbarDiv">
                    <span className="hamberger" onClick={this.hambergerClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </span>
                    <div className="headerLinks">
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/chuckNorisApi" className="navLink">Chuck Noris jokes</Link>
                        <Link to="/JokesApi" className="navLink">Jokes</Link>
                        <Link to="/favorites" className="navLink">Favorites</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (Navbar)