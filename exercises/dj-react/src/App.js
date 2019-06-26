import React, {Component} from "react"
import Box from "./Box"
import Buttons from "./Buttons"
import "./style.css"


class App extends Component {
    constructor(){
        super()
        this.state = {
            box1Color: "white",
            box2Color: "white",
            box3Color: "white",
            box4Color: "white"
        }
    }

    whiteToBlack = () => {
        let colorChange
        if(this.state.box1Color === "white"){
            colorChange = "black"
        }else{
            colorChange = "white"
        }

        this.setState({
            box1Color: colorChange,
            box2Color: colorChange,
            box3Color: colorChange,
            box4Color: colorChange
        })
    }

    topPurple = () => {
        let colorChang = "purple"

        this.setState({
            box1Color: colorChang,
            box2Color: colorChang
        })
    }

    bottomLeftBlue = () => {
        let colorChang = "blue"

        this.setState({
            box3Color: colorChang
        })
    }

    bottomRightBlue = () => {
        let colorChang = "blue"

        this.setState({
            box4Color: colorChang
        })
    }

    topRight = () => {
        let colorChang 
        if(this.state.box2Color==="white"){
            colorChang = "gray"
        }else if(this.state.box2Color==="gray"){
            colorChang = "black"
        }else if(this.state.box2Color==="black"){
            colorChang = "red"
        }else if(this.state.box2Color==="red"){
            colorChang = "yellow"
        }else if(this.state.box2Color==="yellow"){
            colorChang = "green"
        }else if(this.state.box2Color==="green"){
            colorChang = "blue"
        }else{ colorChang = "white"}

        this.setState({
            box2Color: colorChang
        })
    }



    topLeft = () => {
        let colorChang
        if(this.state.box1Color==="white"){
            colorChang = "gray"
        }else if(this.state.box1Color==="gray"){
            colorChang = "black"
        }else if(this.state.box1Color==="black"){
            colorChang = "red"
        }else if(this.state.box1Color==="red"){
            colorChang = "yellow"
        }else if(this.state.box1Color==="yellow"){
            colorChang = "green"
        }else if(this.state.box1Color==="green"){
            colorChang = "blue"
        }else{ colorChang = "white"}

        this.setState({
            box1Color: colorChang
        })
    }
    

    bottomRight = () => {
        let colorChang
        if(this.state.box4Color==="white"){
            colorChang = "gray"
        }else if(this.state.box4Color==="gray"){
            colorChang = "black"
        }else if(this.state.box4Color==="black"){
            colorChang = "red"
        }else if(this.state.box4Color==="red"){
            colorChang = "yellow"
        }else if(this.state.box4Color==="yellow"){
            colorChang = "green"
        }else if(this.state.box4Color==="green"){
            colorChang = "blue"
        }else{ colorChang = "white"}

        this.setState({
            box4Color: colorChang
        })
    }
    

    bottomLeft = () => {
        let colorChang
        if(this.state.box3Color==="white"){
            colorChang = "gray"
        }else if(this.state.box3Color==="gray"){
            colorChang = "black"
        }else if(this.state.box3Color==="black"){
            colorChang = "red"
        }else if(this.state.box3Color==="red"){
            colorChang = "yellow"
        }else if(this.state.box3Color==="yellow"){
            colorChang = "green"
        }else if(this.state.box3Color==="green"){
            colorChang = "blue"
        }else{ colorChang = "white"}

        this.setState({
            box3Color: colorChang
        })
    }

    render(){
        return(
            <div className = "boxGrid">
                <Box color={this.state.box1Color} className = "box1"/>
                <Box color={this.state.box2Color} className = "box2"/>
                <Box color={this.state.box3Color} className = "box3"/>
                <Box color={this.state.box4Color} className = "box4"/>
                <Buttons 
                    whiteToBlack={this.whiteToBlack}
                    topPurple={this.topPurple}
                    bottomLeftBlue={this.bottomLeftBlue}
                    bottomRightBlue={this.bottomRightBlue}
                    topLeft={this.topLeft}
                    topRight={this.topRight}
                    bottomLeft={this.bottomLeft}
                    bottomRight={this.bottomRight}/>
            </div>
        )
    }
}
export default App