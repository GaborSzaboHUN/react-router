import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Countries() {

    const [countries, setCountries] = useState([])

    useEffect(function () {
        fetch("https://restcountries.com/v3.1/all")
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                setCountries(json)
            })
    })

    return (
        <>
            <div>Countries</div>
            <ul>
                {countries.map((country) =>
                    <li key={country.name.official}>
                        <Link to={"/country/" + country.name.official}>{country.name.official}</Link>
                    </li>)}
            </ul>
        </>


    )
}

export default Countries