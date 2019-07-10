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
            jokesFavButton: false,
            jokesFavoritArr: [],
            punchlineArr: [],
        }
    }


    handleJokesClick = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then(res => {
            this.setState({
                jokes: res.data.setup,
                _id: res.data.id + "j",
                punchline: res.data.punchline,
                jokesFavButton: true
            })
        })
        .catch(err => console.log(err))
    }
        

    saveToJokesFavorits = () => {
        if(!this.state.jokesFavoritArr.includes(this.state.jokes)){
            this.setState({
                jokesFavoritArr: this.state.jokes,
                punchlineArr: this.state.punchline
            })
            localStorage.setItem(this.state._id, this.state.jokes) 
        }
    }

    render(){
        return(
            <JokesContect.Provider  
                value={{
                    jokes: this.state.jokes,
                    punchline: this.state.punchline,
                    _id: this.state.punchline_id,
                    jokesFavButton: this.state.jokesFavButton,
                    jokesFavoritArr: this.state.jokesFavoritArr,
                    punchlineArr:this.state.punchlineArr,
                    handleJokesClick: this.handleJokesClick,
                    saveToJokesFavorits: this.saveToJokesFavorits
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