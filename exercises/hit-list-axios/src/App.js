import React, { Component } from "react"
import axios from "axios"
import MappedData from "./MappedData.js"
import "./style.css"

class App extends Component{
    constructor(){
        super()
        this.state={
            hitList: []
        }
    }

    componentDidMount = () => {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json")
        .then(res => {
            this.setState({
                hitList: res.data
            })
        })  
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="bodyDiv">
                <header className="headerDiv">
                <h1>Don Vito Corleone secret Hit-list</h1>
                </header>
                <MappedData
                    hitList = {this.state.hitList}/>
            </div>
        )
    }
}

export default App