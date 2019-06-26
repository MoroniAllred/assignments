import React from "react"
import Pets from "./Pets"

function Friends(props){
    const mappedPets = props.pets.map((pets, i) => <Pets
                                                    key = {i + pets}
                                                    name = {pets.name}
                                                    breed = {pets.breed}/>)
    


    return (
        <div className="friend">
            <h2>One of my freinds are {props.name} they are the age of {props.age}</h2>
            {mappedPets}
        </div>
    )
}

export default Friends