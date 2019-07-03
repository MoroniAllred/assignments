import React from "react"
import MappedCountries from "./MappedCountries.js"


const BadgeForm = (props) => {

    return(
        <div id="bageForm">
            <form onSubmit={props.handleSubmit}>
                <input 
                    type="text" 
                    name="firstName" 
                    value={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                    // required
                    // minLength = "3"
                    />
                <input 
                    type="text" 
                    name="lastName" 
                    value={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                    // required
                    // minLength = "3"
                    />
                <input 
                    type="email" 
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    placeholder="Email"
                    // minLength = "3"
                    />
                <input 
                    type="date" 
                    name="birthday"
                    value={props.birthday}
                    onChange={props.handleChange}
                    // required
                    // minLength = "10"
                    />
                <input 
                    type="text"
                    name="birthCity"
                    value={props.birthCity}
                    onChange={props.handleChange}
                    placeholder="City of birth"
                    // required
                    // minLength = "3"
                    />
                <input
                    type="text"
                    name="stateOrProvince"
                    value={props.stateOrProvince}
                    onChange={props.handleChange}
                    placeholder="State/Province"
                    // required
                    // minLength = "3"
                    />
                <MappedCountries handleChange={props.handleChange}/>
                Male: <input type="radio" 
                                    name="gender" 
                                    value="Male" 
                                    onChange={props.handleChange}/>
                Female: <input type="radio" 
                                    name="gender" 
                                    value="Famale" 
                                    onChange={props.handleChange}/>
                Rather not say: <input type="radio" 
                                    name="gender" 
                                    value="Other" 
                                    onChange={props.handleChange}/>
                <input 
                    type="number" 
                    name="phoneNumber"
                    value={props.phoneNumber}
                    onChange={props.handleChange}
                    placeholder="Phone Number"
                    // required
                    // minLength = "3"
                    />
                <input 
                    type="text" 
                    name="favFood"
                    value={props.favFood}
                    onChange={props.handleChange}
                    placeholder="Your Favorit Dish"
                    // required
                    // minLength = "3"
                    />
                <textarea 
                    rows = {15}
                    cols ={55}
                    style = {{resize: "none"}}
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                    placeholder="Please fell free to fill in any other information you fell would be usefull."></textarea>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default BadgeForm