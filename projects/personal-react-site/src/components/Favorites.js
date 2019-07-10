import React, {Component} from "react"

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

    render(){
        console.log(this.state.jokes)
        const mappedFavs = this.state.jokes.map((joke) => {
            joke = joke
            return(
                <div className="mappedDiv">
                    <span>
                        <h3>{joke.joke}</h3>
                        <h3>{joke.punchline}</h3>
                        
                    </span>
                    <span>
                        <h3>{joke.chuck}</h3>
                    </span>
                        <button onClick={this.remove} id={joke.id}>Remove Favorite</button>
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
export default Favorites