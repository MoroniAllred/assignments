import React from "react"
import {withTheme} from "../context/Theme"

const Header = (props) => {
    return (
        <div className={`header header-${props.theme}`}>
            <p>Home</p>
            <p>services</p>
            <p>about</p>
        </div>
    )
}

export default withTheme(Header) 