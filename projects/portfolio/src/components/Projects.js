import React from "react"

const Project = () => {

    return (
        <div className="projects">
            <h1>Projects</h1>
            <p>Click on a Image to visit the webpage.</p>
            <div className="parentProjectPic">
                <a href="http://laugh-o-l.surge.sh/" target="_blank"><div className="projectPic" id="laughOL"></div></a>  
                <a href="https://fullstackpizza.herokuapp.com/" target="_blank"><div className="projectPic" id="fullStackPizza"></div></a>
            </div>
        </div>
    )
}

export default Project 
