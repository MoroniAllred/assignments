import React from "react"
import moment from "moment"
const Badge = (props) => {

    return(
        <div className="badgeDiv">
            <h1 className="nameH1 evenSpace">Name: {props.name}</h1>
            <h6 className="emailH6 evenSpace">Email Adress: {props.email}</h6>
            <p className="genderP evenSpace">Gender: {props.gender}</p>
            <h6 className="phoneH6 evenSpace">Phone Number: ({props.phoneNumber.substring(0,3)}) {props.phoneNumber.substring(3,6)}-{props.phoneNumber.substring(6)}</h6>
            <p className="birthP evenSpace">Place of Birth: {props.birthCity}, {props.stateOrProvince}, {props.country} </p>
            <p className="dateP evenSpace">Date of Birth: {moment.utc(props.birthday).format("L")}</p>
            <p className="foodP evenSpace">Favorit Food: {props.favFood}</p>
            <p className="infoP">Other Info: {props.description}</p>
        </div>
    )
}

export default Badge