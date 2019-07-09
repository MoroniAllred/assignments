import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
const Footer = () => {

    return(
        <div className="footDiv">
            <p >Email Address: moroniallred@gmail.com</p>
            <a href="https://www.linkedin.com/in/moroni-allred-18a005173/" className="linkedinLink"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="https://github.com/MoroniAllred" className="githubLink"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
    )
}

export default Footer