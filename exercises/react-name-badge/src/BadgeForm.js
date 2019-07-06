import React from "react"
import MappedCountries from "./MappedCountries.js"


const BadgeForm = (props) => {

    return(
        <div >
            <form id="badgeForm" onSubmit={props.handleSubmit}>
                <input 
                    className="name"
                    type="text" 
                    name="firstName" 
                    value={props.firstName}
                    onChange={props.handleChange}
                    placeholder="First Name"
                    required
                    minLength = "3"
                    />
                <input 
                    className="name"
                    type="text" 
                    name="lastName" 
                    value={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                    required
                    minLength = "3"
                    />
                <input 
                    className="email"
                    type="email" 
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    placeholder="Email"
                    minLength = "3"
                    />
                <span className="birthDate">Date of Birth:</span> <input 
                    className="birthDate"
                    type="date" 
                    name="birthday"
                    value={props.birthday}
                    onChange={props.handleChange}
                    required
                    minLength = "10"
                    />
                <input 
                    className="birth"
                    type="text"
                    name="birthCity"
                    value={props.birthCity}
                    onChange={props.handleChange}
                    placeholder="City of birth"
                    required
                    minLength = "3"
                    />
                <input className="birth"
                    type="text"
                    name="stateOrProvince"
                    value={props.stateOrProvince}
                    onChange={props.handleChange}
                    placeholder="State/Province"
                    required
                    minLength = "3"
                    />
                <MappedCountries handleChange={props.handleChange}/>
               <span className="gender genderSpance">Male:</span> <input type="radio" 
                                    name="gender" 
                                    value="Male" 
                                    onChange={props.handleChange}/>
                <span className="genderSpance">Female</span>: <input type="radio" 
                                    name="gender" 
                                    value="Famale" 
                                    onChange={props.handleChange}/>
                <span className="genderSpance">Rather not say:</span> <input type="radio" 
                                    name="gender" 
                                    value="Other" 
                                    onChange={props.handleChange}/>
                <input className="number"
                    type="number" 
                    name="phoneNumber"
                    value={props.phoneNumber}
                    onChange={props.handleChange}
                    placeholder="Phone Number"
                    required
                    minLength = "3"
                    />
                <input className="food"
                    type="text" 
                    name="favFood"
                    value={props.favFood}
                    onChange={props.handleChange}
                    placeholder="Your Favorit Dish"
                    required
                    minLength = "3"
                    />
                <textarea 
                    className="textarea"
                    rows = {10}
                    cols ={45}
                    style = {{resize: "none"}}
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                    placeholder="Please fell free to fill in any other information you fell would be usefull."></textarea>
                <button className="formButton">Submit!</button>
            </form>
        </div>
    )
}

export default BadgeForm