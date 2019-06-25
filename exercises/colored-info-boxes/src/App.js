import React from "react"
import Box from "./Box"
import "./style.css"

function App(props){
    return(
        <div>
            <Box title="box1"   subtitle="blue"         information="this is box 1"     backgroundColor="blue"/>
            <Box title="box2"   subtitle="red"          information="this is box 2"     backgroundColor="red"/>
            <Box title="box3"   subtitle="green"        information="this is box 3"     backgroundColor="green"/>
            <Box title="box4"   subtitle="purple"       information="this is box 4"     backgroundColor="purple"/>
            <Box title="box5"   subtitle="yellow"       information="this is box 5"     backgroundColor="yellow"/>
            <Box title="box6"   subtitle="brown"        information="this is box 6"     backgroundColor="brown"/>
            <Box title="box7"   subtitle="gray"         information="this is box 7"     backgroundColor="gray"/>
            <Box title="box8"   subtitle="orange"       information="this is box 8"     backgroundColor="orange"/>
            <Box title="box9"   subtitle="pink"         information="this is box 9"     backgroundColor="pink"/>
            <Box title="box10"  subtitle="light blue"   information="this is box 10"    backgroundColor="#3bf8fe"/>
        </div>
    )
}

export default App