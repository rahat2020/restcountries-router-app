import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, region} = props.country
    const divStyle ={
        border: '1px solid red',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center'
    }
   
    return (
        <div style={divStyle}>
            <h2>Country name: {name}</h2>
            <h3>show region: {region}</h3>
            <p> Go there for more information  <Link to={`/country/${name}`}> <button>show detail of {name}</button> </Link></p>

      
        </div>
    );
};

export default Country;