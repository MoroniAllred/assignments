import React, { Component } from "react"
import axios from "axios"
import ChuckNorisText from "./appGrandchildren/ChuckNorisText"

class ChuckNorisApi extends Component {
    constructor(){
        super()
        this.state ={
            joke: "Press the button to generate a joke!"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => {
            this.setState({
                joke: res.data.value
            })
        })
        .catch(err => console.log(err))
    }
       
    render(){
        return(
            <div className="chuckApiDiv">
                <ChuckNorisText joke={this.state.joke}/>
                <button onClick={this.handleClick}>New Joke!</button>
            </div>
        )
    }
}

export default ChuckNorisApi