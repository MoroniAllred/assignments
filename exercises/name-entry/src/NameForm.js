import React from "react"

const NameForm = (props) =>{

    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="firstName" 
                value={props.firstName} 
                onChange={props.handleChange}
                placeholder="First Name"></input>
            <input 
                type="text" 
                name="lastName" 
                value={props.lastName} 
                onChange={props.handleChange}
                placeholder="Last Name"></input>
            <button>Submit!</button>
        </form>
        )
}


export default NameForm