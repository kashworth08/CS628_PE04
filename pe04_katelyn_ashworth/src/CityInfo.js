import React from "react";

// create items that will be displayed when the city is clicked on in the list
const CityDetails = ({ city }) => {
  return (
    <div>
      <h2>City Details</h2>
      <p>Name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
};

export default CityDetails;