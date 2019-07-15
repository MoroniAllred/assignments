import React, {Component} from "react"
import Form from "./components/Form.js"
import axios from "axios"


class App extends Component {
    constructor(){
        super()
        this.state ={

        }
    }

    componentDidMount(){
        axios.get("https://api.vschool.io/moroniallred/todo")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Form/>
            </div>
     )
    }
}

export default App