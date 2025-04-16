import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
      .catch(err => console.error(err));
  }, [name]);

  if (!country) return <p>Loading...</p>;

  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

  return (
    <div style={{ padding: '20px' }}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={country.name.common} style={{ width: '300px' }} />
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Currency:</strong> {currencies}</p>
      <p><strong>Continent:</strong> {country.continents?.[0]}</p>
      <p><strong>Language(s):</strong> {languages}</p>
      <p><strong>Time Zone(s):</strong> {country.timezones.join(', ')}</p>
      <p>
        <strong>Google Maps:</strong>{' '}
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </p>
    </div>
  );
}

export default CountryDetail;