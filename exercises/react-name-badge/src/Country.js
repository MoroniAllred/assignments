import React from "react"

const Country = (props, i) => {

    console.log(props.name)
    return(
        <option value={props.name}>
            {props.name}
        </option>
    )
}

export default Country