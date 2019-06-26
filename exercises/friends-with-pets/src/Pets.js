import React from "react"

function Pets(props){
    return (
        <div>
            <p>they have a pet with the name of {props.name} and it's breed is {props.breed}</p>
        </div>
    )
}


export default Pets