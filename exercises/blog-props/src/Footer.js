import React from "react"
// import { library } from "@fortawesome/fontawesome-svg-core"
// import {fab} from "afortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons"

function Footer(){
    return(
        <div id="footDiv">
            <div>
                <a href="" className="symb"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="" className="symb"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="" className="symb"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
            <p id="footerP">Copyright © Your Website 2019</p>
        </div>
    )
}

export default Footer