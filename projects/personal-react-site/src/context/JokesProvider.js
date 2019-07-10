import React, {Component} from "react"
import axios from "axios"

const JokesContect = React.createContext()

class JokesProvider extends Component {
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
            <JokesContect.Provider  
                value={{
                    jokes: this.state.jokes,
                    punchline: this.state.punchline,
                    _id: this.state.punchline_id,
                    jokesPunchButton: this.state.jokesPunchButton,
                    jokesFavoritArr: this.state.jokesFavoritArr,
                    punchlineArr:this.state.punchlineArr,
                    handleJokesClick: this.handleJokesClick,
                    saveToJokesFavorits: this.saveToJokesFavorits,
                    showPunchline: this.showPunchline,
                    punchShow: this.state.punchShow
                }}>
                {this.props.children}
            </JokesContect.Provider>
        )
    }  
}

export default JokesProvider

export const withJokes = C => props => (
    <JokesContect.Consumer>
        {value => <C {...value} {...props}/>}
    </JokesContect.Consumer>
)