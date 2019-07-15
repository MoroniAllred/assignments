import React, {Component} from "react"
import axios from "axios"
import ChuckNorisText from "./appGrandchildren/ChuckNorisText.js"

class ChuckNorisApi extends Component{
    constructor(){
        super()
        this.state = {
            chuckJoke: "Press the button to generate a joke!",
            favorit: false,
            _id: "",
            chuckFavoritArr: []
        }
    }

    handleChuckClick = () => {
        axios.get("http://api.icndb.com/jokes/random")
        .then(res =>{
        this.setState({
            chuckJoke: res.data.value.joke,
            favorit: true,
            _id: res.data.value.id + "c"
            })
        })
        .catch(err => console.log(err))
    }
    
    saveToChuckFavorit = () => {
        if(!this.state.chuckFavoritArr.includes(this.state._id)){
            this.setState({
                chuckFavoritArr: this.state._id
            })
            const favChuck={chuck: this.state.chuckJoke, id: this.state._id}
            localStorage.setItem(this.state._id, JSON.stringify(favChuck))
            alert("It has been saved to favorites!")
        }
    }

    render(){
        return(
            <div className="chuckApiDiv">
                <ChuckNorisText chuckJoke={this.state.chuckJoke}/>
                <span className="buttons">
                    <button onClick={ this.handleChuckClick}>New Joke!</button>
                    <button onClick={ this.saveToChuckFavorit} className={`buttonIs-${this.state.favorit} chunkButton`}>Save to favorits!</button>
                </span>
            </div>
        )
    }
}


export default ChuckNorisApi