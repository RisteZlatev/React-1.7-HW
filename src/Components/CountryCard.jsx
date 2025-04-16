import React from 'react';
import { Link } from 'react-router-dom';


function CountryCard({ country }) {
  return (
    <div className='country'>
      <img src={country.flags.png} alt={country.name.common} style={{ width: '100%' }} />
      <div className='div-txt'>
        <h3>{country.name.common}</h3>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <Link to={`/country/${country.name.common}`}>View Details</Link>
      </div>
    </div>
  );
}

export default CountryCard;