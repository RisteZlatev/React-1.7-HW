import React from "react";
import { useState, useEffect } from "react";
import CountryCard from "../../Components/CountryCard";

function Home(){

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>{ 
            return res.json()
        })
        .then(data =>{
             setCountries(data)
        })
    }, [])


    function handleSearch(e) {
        setSearch(e.target.value);
      }


    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );

      return (
        <div>
          <input
            type="text"
            placeholder="Search countries"
            value={search}
            onChange={handleSearch}
          />
          <div>
            {filteredCountries.map((country,index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        </div>
      );


}
export default Home;
