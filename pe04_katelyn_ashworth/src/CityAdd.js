import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CityAdd.css';

// create the ability to set new names, countries, and populations for cities
const CityAdd = ({ addCity }) => {
  const [city, setCity] = useState({ name: '', country: '', population: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

// add new city to global list and go to city list page
  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city); 
    navigate('/CityList'); 
  };

//Generate output to be displayed on the screen
  return (
    <div>
      <h1>Cities Application</h1>
      <h2>Add a New City</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={city.name}
          onChange={handleChange}
          placeholder="City Name"
          required
        />
        <input
          type="text"
          name="country"
          value={city.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="number"
          name="population"
          value={city.population}
          onChange={handleChange}
          placeholder="Population"
          required
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default CityAdd;