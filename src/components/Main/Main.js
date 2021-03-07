import React from 'react';
import  {useState, useEffect} from 'react';
import Country from '../Country/Country';
const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`
        fetch(url)
        .then(res => res.json())
        .then (data => setCountries(data))
    },[])
    return (
        <div>
            <h1 style={{border: '2px solid purple', textAlign: 'center', textTransform: 'capitalize', padding: '5px'}}>show all countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Main;