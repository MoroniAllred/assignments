import React from "react"
import {withTheme} from "../context/Theme"

const Main = (props) => {
    return(
        <h1 className={`main main-${props.theme}`}>This is the Main Page!</h1>
    )
}

export default withTheme(Main)