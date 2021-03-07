import React, { useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
const  {name,alpha2Code,flag} = useParams()
const [country,setCountry] = useState({})
    useState(() => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountry(data))
    },[])
    const imgStyle ={
        height: '100px',
        width: '100'

    }
    return (
        <div>
            <h1>show name: {country.name}</h1>
            <h3>show alphaCode: {country.alpha2Code}</h3>
            <img style={imgStyle} src={country.flag} alt="here is the image"></img>
        </div>
    );
};

export default CountryDetail;