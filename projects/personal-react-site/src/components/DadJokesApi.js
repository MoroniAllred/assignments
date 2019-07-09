import React, { Component } from "react"
import axios from "axios"
import DadJokesText from "./appGrandchildren/DadJokesText"


class DadJokesApi extends Component {
    constructor(){
        super()
        this.state = {
            joke: "Hit the button to gernate a dad joke!"
        }
    }

    handleClick = () => {
        axios.get("https://icanhazdadjoke.com/slack")
        .then(res => {
            this.setState({
                joke: res.data.attachments[0].text
            })
        })
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <div className="dadApiDiv">
                <DadJokesText joke={this.state.joke}/>
                <button onClick={this.handleClick}>New Joke!</button>
            </div>
        )
    }
}

export default DadJokesApi