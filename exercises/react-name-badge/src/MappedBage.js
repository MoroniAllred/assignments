 import React from "react"
 import Badge from "./Badge.js"

const MappedBage = (props) => {
    const mappedBage = props.bageArr.map((person, i) => <Badge
                                        name = {person.firstName + " " + person.lastName}
                                        email = {person.email}
                                        phoneNumber = {person.phoneNumber}
                                        birthPlace = {person.birthPlace}
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