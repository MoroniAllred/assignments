import React, {Component} from "react"
import axios from "axios"

class App extends Component {
   constructor(){
       super()
       this.state = {
           color: ""

       }
    }

    componentDidMount = () =>{
        axios.get("http://www.colr.org/json/color/random")
        .then(res => {
            this.setState({
                color: res.data.colors[0].hex
            })
        })
        .catch()
    }

    render(){
        console.log(this.state.color)
        return (
            <div style ={ {backgroundColor: `#${this.state.color}`, height: 1000}}>
                
            </div>
        )
    } 
}

export default App