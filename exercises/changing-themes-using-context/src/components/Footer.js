import React from "react"
import {withTheme} from "../context/Theme"

const Footer = (props) => {
    return(
        <div className={`footer footer-${props.theme}`}>
            <p>email@emailadress.com</p>
            <p>Linked in link</p>
            <p>Git hub link</p>
        </div>
    )
}

export default withTheme(Footer)