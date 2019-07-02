import React, {Component} from "react"
import MappedBage from "./MappedBage.js"
import BadgeForm from "./BadgeForm.js"
import "./style.css"

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            birthday: "",
            phoneNumber: "",
            favFood: "",
            description: "",
            disabled: true,
            bageArr: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const bage = {  
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthday: new Date(this.state.birthday),
            birthPlace: this.state.birthPlace,
            phoneNumber: this.state.phoneNumber,
            favFood: this.state.favFood,
            description: this.state.description}
            
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            birthday: "",
            birthPlace: "",
            phoneNumber: "",
            favFood: "",
            description: "",
            bageArr: [...prevState.bageArr, bage]
        }))

    }



    render(){
        return (
            <div>
                <BadgeForm
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        email = {this.state.email}
                        birthday = {this.state.birthday}
                        birthPlace = {this.state.birthPlace}
                        phoneNumber = {this.state.phoneNumber}
                        favFood = {this.state.favFood}
                        description = {this.state.description}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        />
                <MappedBage 
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        email = {this.state.email}
                        birthday = {this.state.birthday}
                        birthPlace = {this.state.birthPlace}
                        phoneNumber = {this.state.phoneNumber}
                        favFood = {this.state.phoneNumber}
                        description = {this.state.description}
                        bageArr = {this.state.bageArr}/>
            </div>
        )
    }
}

export default App