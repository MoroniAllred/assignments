import React from "react"

function BlogPost(props){
    return(
        <div id="blogDiv">
            <a href="" id="title">{props.title}</a>
            <a href="" id="description">{props.description}</a>
            <p id="poster">Posted by {props.poster} on {props.date}</p>
        </div>
    )

}

export default BlogPost