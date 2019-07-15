import React, {Component} from "react"
import axios from "axios"
import JokesText from "./appGrandchildren/JokesText.js"


class JokesApi extends Component {
    constructor(){
        super()
        this.state = {
            jokes: "Hit the button to gernate a joke!",
            _id: "",
            punchline: "",
            jokesPunchButton: false,
            jokesFavoritArr: [],
            punchlineArr: [],
            punchShow: false
        }
    }

    handleJokesClick = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(res => {
            this.setState({
                jokes: res.data.setup,
                _id: res.data.id + "j",
                punchline: res.data.punchline,
                jokesPunchButton: true,
                punchShow: false
            })
        })
        .catch(err => console.log(err))
    }

    showPunchline = () => {
        this.setState({
            punchShow: true
        })  
    } 

    saveToJokesFavorits = () => {
        if(!this.state.jokesFavoritArr.includes(this.state._id)){
            this.setState({
                jokesFavoritArr: this.state._id,
                punchlineArr: this.state.punchline
            })
            let fullJoke= {joke: this.state.jokes, punchline: this.state.punchline, id: this.state._id}
            localStorage.setItem(this.state._id, JSON.stringify(fullJoke))
            alert("It has been saved in your favorites!") 
        }
    }

    render(){
           return(
            <div className="jokesApiDiv">
                <JokesText jokes={this.state.jokes}
                            punchline={this.state.punchline}
                            punchShow={this.state.punchShow}/>
                <button onClick={this.handleJokesClick}>New Joke!</button>
                <button onClick={this.showPunchline} className={`punchButton punchButton-${this.state.jokesPunchButton}`}>Get puchline!</button>
                <button onClick={this.saveToJokesFavorits} className={`jokeFav jokeFav-${this.state.punchShow}`}>Save to favorits!</button>
            </div>
        )
    } 
}

export default JokesApi