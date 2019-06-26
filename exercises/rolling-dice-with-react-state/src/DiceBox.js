import React, {Component} from "react"
import Die from "./Die"
import Button from "./button"

class DiceBox extends Component{
    constructor(){
        super()
        this.state = {
            numArr: [
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1)
            ]
            // die1: 1,
            // die2: 1,
            // die3: 1,
            // die4: 1,
            // die5: 1
        }
    }

    diceRoll = () => {

        this.setState({
            numArr: [
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1),
                Math.floor(Math.random() * 6 + 1)
            ]
        })
    }

    

    render(){
        return(
            <div className="center">
                <Die number={this.state.numArr}/>
                <Button diceRoll={this.diceRoll}/>
            </div>
        )
    }
}

export default DiceBox