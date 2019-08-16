import React, {Component} from "react"
import axios from "axios"

class BountyGetter extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    bountyDisplay = () => {
        axios.get("/bounty")
        .then()
        .catch((err) => console.log(err))
    }
    

    render(){
        return(
            <div>
                
            </div>
        )
    }

}

export default BountyGetter