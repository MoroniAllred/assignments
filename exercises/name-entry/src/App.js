import React, {Component} from "react"
import NameForm from "./NameForm"
import MappedNames from "./MappedNames"


class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            name: []
        }  
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newName = {
            firstName: this.state.firstName,
            lastName: this.state.lastName}
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            name: [...prevState.name, newName]
        }))
    } 

    
    
    render(){

        return(

            <div>
                <NameForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}/>
                <MappedNames 
                        name={this.state.name}/>
            </div>
        )
    }
}

export default App