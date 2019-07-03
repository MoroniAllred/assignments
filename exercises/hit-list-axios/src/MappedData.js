import React from "react"
import Data from "./Data"

const MappedData = (props) => {
    const mappedData = props.hitList.map(target => <Data
                                                        name = {target.name}
                                                        image = {target.image}/>
        
        )
    
    return (
            <div className = "mappedDiv">
               {mappedData}
            </div>
            )
}

export default MappedData