import React from "react"
import Countries from "./countries.json"
import Country from "./Country.js"

const MappedCountries = (props) => {
    const mappedCountries = Countries.map(country => <Country
                                                            name ={country.name}
                                                            code = {country.code}/>)
    return(
        <select name="country" onChange={props.handleChange}>
            {mappedCountries}
        </select>
    )                                                        
 }
 
export default MappedCountries