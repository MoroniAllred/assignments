import React, {Component} from "react"
import FavoritText from "./appGrandchildren/FavoritText"

class Favorites extends Component {
    constructor(){
        super()
        this.state={
            jokes: [],
            id: [],
            reload: 1
        }
    }

    componentDidMount(){
        const jokes = Object.values(localStorage).map(joke=>{
            return JSON.parse(joke)
        })
        this.setState({
            jokes
        })
    }
    
    remove = (e) => {
        e.persist()
        localStorage.removeItem(e.target.id)
        this.setState( prevstate => ({
            jokes: prevstate.jokes.filter(joke => {
                if(e.target.id === joke.id){
                    return false
                }else{
                    return true
                }
            }
                )
        }))
    }

    render = () =>{
        if(this.state.jokes.length === 0){
            return (
                <div className="favoritesDiv">
                    <h1 className="mappedDiv">Save your favorite jokes to see them here!</h1>
                </div>
            )
        }else{
        const mappedFavs = this.state.jokes.map((joke, i) => {
            joke = joke
            return(
                <div className="mappedDiv" key={i}>
                    <FavoritText
                        remove={this.remove}
                        chuck={joke.chuck}
                        joke={joke.joke}
                        punchline={joke.punchline}
                        id={joke.id}/>
                </div>
            ) 
            
        })
        return(
            <div className="favoritesDiv">
                {mappedFavs}
            </div>
        )
    }
    }
}
export default Favorites