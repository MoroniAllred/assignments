import React from "react"
import moment from "moment"
const Badge = (props) => {

    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h6>Email Adress: {props.email}</h6>
            <h6>Phone Number: ({props.phoneNumber.substring(0,3)}) {props.phoneNumber.substring(3,6)}-{props.phoneNumber.substring(6)}</h6>
            <p>Place of Birth: {props.birthPlace}</p>
            <p>Date of Birth: {moment.utc(props.birthday).format("L")}</p>
            <p>Favorit Food: {props.favFood}</p>
            <p>Other Info: {props.description}</p>
        </div>
    )
}

export default Badge