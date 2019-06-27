import React from "react"

const MappedNames = (props) => {
    const mappedNames = props.name.map((person,i) => <h1>{person.firstName} {person.lastName}</h1>)
    
    return(
        <div>
            {mappedNames}
        </div>
    )
}

export default MappedNames