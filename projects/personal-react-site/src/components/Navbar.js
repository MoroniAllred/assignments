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
    componentDidMount= () => {
        window.addEventListener("click", (e) => {
            if(e.target.id === "burger" || (e.target.parentNode && e.target.parentNode.id === "burger") || (e.target.parentNode.parentNode && e.target.parentNode.parentNode.id === "burger")){
                this.setState(prevState => {
                    return {hambergerValue: !prevState.ham}
                })
            }else{
                this.setState({
                    hambergerValue: false
                })
            }
        })
    }

    render(){
        return(
            <div>
                <div className={`hamberlinks hambergerlinks-${this.state.hambergerValue}`}>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/chuckNorisApi" className="navLink">Chuck Norris jokes</Link>
                    <Link to="/JokesApi" className="navLink">Jokes</Link>
                    <Link to="/favorites" className="navLink">Favorites</Link>
                </div> 
                <div className="navbarDiv">
                    <span className="hamberger" id="burger" onClick={this.hambergerClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </span>
                    <div className="headerLinks">
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/chuckNorisApi" className="navLink">Chuck Norris jokes</Link>
                        <Link to="/JokesApi" className="navLink">Jokes</Link>
                        <Link to="/favorites" className="navLink">Favorites</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (Navbar)