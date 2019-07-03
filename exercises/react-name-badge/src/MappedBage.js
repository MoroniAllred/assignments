 import React from "react"
 import Badge from "./Badge.js"

const MappedBage = (props) => {
    const mappedBage = props.bageArr.map((person, i) => <Badge
                                        name = {person.firstName + " " + person.lastName}
                                        email = {person.email}
                                        gender ={person.gender}
                                        phoneNumber = {person.phoneNumber}
                                        birthCity = {person.birthCity}
                                        stateOrProvince = {person.stateOrProvince}
                                        country = {person.country}
                                        birthday = {person.birthday}
                                        favFood = {person.favFood}
                                        description = {person.description} />)

    return(
        <div>
            {mappedBage}
        </div>
    )
}


 export default MappedBage 