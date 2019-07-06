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
            birthCity: "",
            stateOrProvince: "",
            country: "",
            birthday: "",
            gender: "",
            phoneNumber: "",
            favFood: "",
            description: "",
            disabled: true,
            bageArr: [],
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const badge = {  
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            birthday: new Date(this.state.birthday),
            birthCity: this.state.birthCity,
            country: this.state.country,
            stateOrProvince: this.state.stateOrProvince,
            gender: this.state.gender,
            phoneNumber: this.state.phoneNumber,
            favFood: this.state.favFood,
            description: this.state.description}
            
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            birthday: "",
            birthCity: "",
            country: "",
            stateOrProvince: "",
            phoneNumber: "",
            favFood: "",
            description: "",
            bageArr: [...prevState.bageArr, badge]
        }))

    }



    render(){
        return (
            <div className="appDiv">
                <BadgeForm 
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        email = {this.state.email}
                        birthday = {this.state.birthday}
                        birthCity = {this.state.birthCity}
                        stateOrProvince ={this.state.stateOrProvince}
                        gender = {this.state.gender}
                        phoneNumber = {this.state.phoneNumber}
                        favFood = {this.state.favFood}
                        description = {this.state.description}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSubmit}
                        />      
                <MappedBage 
                        bageArr = {this.state.bageArr}/>
            </div>
        )
    }
}

export default App