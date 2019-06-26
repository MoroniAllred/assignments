import React from "react"
import Vacspot from "./Vacspot"
import "./style.css"

function App(props){
    const vacationSpots = [
        {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring",
        _id: "1"
        },{
        place: "Cancun",
        price: 900,
        timeToGo: "Winter",
        _id: "2"
        },{
        place: "China",
        price: 1200,
        timeToGo: "Fall",
        _id: "3"
        },{
        place: "Russia",
        price: 1100,
        timeToGo: "Summer",
        _id: "4"
        },{
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring",
        _id: "5"
        }
    ]

    const mappedVac = vacationSpots.map(spot => <Vacspot
                                            key = {spot._id}
                                            place = {spot.place}
                                            price = {spot.price}
                                            when = {spot.timeToGo}/>)


return (
    <div>
        {mappedVac}
    </div>
)

}
export default App