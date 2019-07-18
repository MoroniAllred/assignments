import React from "react"
import resume from "../resume/Moroni_Allred's_Resume-Google_Docs.pdf"

const About = () => {

    return(
        <div className="about">
            <div className="aboutMe">
                <h3>I am a fullstack software enginer.</h3><br/>
                <h4>I was born and raised in Utah, and I curently still
                     live in Utah. On my free time I enjoy drit bike riding.
                      I game on my PS4 and PC, but I am not very good at either.</h4>
            </div>
            <div className="skills">
                <h4>My hard skills include:</h4>
                <ul className="skillList">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Github</li>
                    <li>Node.js</li>
                </ul>
                <div className="resumeDiv">
                    <a href={resume} download="Moroni_Allred's_Resume.pdf" className="download"> Click to download my resume!</a>
                </div>
            </div >
            <div className="aboutPicture">

            </div>
        </div>
    )
}

export default About




