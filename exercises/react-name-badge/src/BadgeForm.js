import React from "react"

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
                    required
                    minLength = "3"/>
                <input 
                    type="text" 
                    name="lastName" 
                    value={props.lastName}
                    onChange={props.handleChange}
                    placeholder="Last Name"
                    required
                    minLength = "3"/>
                <input 
                    type="email" 
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    placeholder="Email"
                    minLength = "3"/>
                <input 
                    type="date" 
                    name="birthday"
                    value={props.birthday}
                    onChange={props.handleChange}
                    required
                    minLength = "10"/>
                <input 
                    type="text"
                    name="birthPlace"
                    value={props.birthPlace}
                    onChange={props.handleChange}
                    placeholder="Place of birth"
                    required
                    minLength = "3"/>
                <input 
                    type="number" 
                    name="phoneNumber"
                    value={props.phoneNumber}
                    onChange={props.handleChange}
                    placeholder="Phone Number"
                    required
                    minLength = "3"/>
                <input 
                    type="text" 
                    name="favFood"
                    value={props.favFood}
                    onChange={props.handleChange}
                    placeholder="Your Favorit Dish"
                    required
                    minLength = "3"/>
                <textarea 
                    rows = {15}
                    cols ={55}
                    style = {{resize: "none"}}
                    name="description"
                    value={props.description}
                    onChange={props.handleChange}
                    placeholder="Please fell free to put in any other information you fell would be usefull."></textarea>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default BadgeForm