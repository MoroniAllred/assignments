import React from "react"
import BlogPost from "./BlogPost"

function BlogList(props){
    const blogs = [
        {
            title: "Man must explore, and this is exploration at its greatest.",
            description: "Problems look mighty small from 150 miles up.",
            poster: "Start Bootstrap",
            date: "September 24, 2019"
        },{
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            description: "",
            poster: "Start Bootstrap",
            date: "September 18, 2019"
        },{
            title: "Science has not yet mastered prophecy",
            description: "We predict too much for the next year and yet far too little for the next ten.",
            poster: "Start Bootstrap",
            date: "August 24, 2019"
        },{
            title: "Failure is not an option",
            description: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            poster: "Start Bootstrap",
            date: "July 8, 2019"
        }
    ]

    const mappedBlogs = blogs.map((blog, i) => <BlogPost
                                                    key = {i + blog}
                                                    title = {blog.title}
                                                    description = {blog.description}
                                                    poster = {blog.poster}
                                                    date= {blog.date}/>)

    return (
        <div>
            {mappedBlogs}
            <div className="buttonDiv">
                <button id="button">ORDER POSTS</button>
            </div>
        </div>
    )

}

export default BlogList