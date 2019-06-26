import React from "react"

function Vacspot(props){

    let dolor
        if(props.price > 1000){
            dolor = "$$$"
        }else if(props.price > 500){
            dolor = "$$"
        }else{
            dolor = "$"
        }
    

    let season
        if(props.when === "Spring"){
            season = "https://images.unsplash.com/photo-1431444393712-19267bd26144?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        }else if(props.when === "Winter"){
            season =  "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        }else if(props.when === "Fall"){
            season = "https://images.unsplash.com/photo-1474572522289-b09bbcaa9284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        }else if(props.when === "Summer"){
            season = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
        }else{
            season = "gray"
        }
    

    return (
        <div style={{backgroundImage: `url(${season})`}} className = "seasons">
            <h1>{props.place}</h1>
            <h3>The price is <span>{dolor}</span>{props.price}</h3>
            <p>When you should go is {props.when}</p>
        </div>
    )
}

export default Vacspot