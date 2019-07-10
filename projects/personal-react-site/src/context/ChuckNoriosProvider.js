import React, {Component} from "react"
import axios from "axios"

const ChuckNorisContext = React.createContext()

class ChuckNorisProvider extends Component {
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
        axios.get("https://api.chucknorris.io/jokes/random")
        .then(res => {
            this.setState({
                chuckJoke: res.data.value,
                chuckFavButton: true,
                _id: res.data.id + "c"
            })
        })
        .catch(err => console.log(err))
    }

    saveToChuckFavorit = () => {
        if(!this.state.chuckFavoritArr.includes(this.state.chuckJoke)){
            this.setState({
                chuckFavoritArr: this.state.chuckJoke
            })
            localStorage.setItem(this.state._id, this.state.chuckJoke)
        }
    }

    render(){
        return(
            <ChuckNorisContext.Provider
                value = {{
                    chuckJoke: this.state.chuckJoke,
                    favorit: this.state.favorit,
                    _id: this.state._id,
                    chuckFavoritArr: this.state.favoritArr,
                    handleChuckClick: this.handleChuckClick,
                    saveToFavorit: this.saveToFavorit
                    }}>
                {this.props.children}
            </ChuckNorisContext.Provider>
        )
    }
}

export default ChuckNorisProvider

export const withChuckNoris = C => props => (
    <ChuckNorisContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ChuckNorisContext.Consumer>
)