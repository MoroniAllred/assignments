import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    return(
        <div className="footer">
            <a href="https://github.com/MoroniAllred" className="github"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/moroni-allred-18a005173/" className="linkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
            <h6>Email Adress: moroniallred@gmail.com</h6>
        </div>
    )
}

export default Footer