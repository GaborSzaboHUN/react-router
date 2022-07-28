import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Country() {

    const [country, setCountry] = useState()

    const params = useParams();

    useEffect(() => {
        const countryFetch = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${params.name}`);
            const data = await response.json();
            setCountry(data[0])
            console.log(data[0])
        }
        countryFetch()
    }, [params.name])

    return (
        <>
            {country && <>
                <h2>{country.name.official}</h2>
                <h3>{country.capital}</h3>
                <img src={country.flags.png} alt="flag" />
            </>}
        </>
    )

}

export default Country