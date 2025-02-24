import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CityList from './CityList';
import CityAdd from './CityAdd';

// Set up the current state of having no cities and then allow
// users to update the cities array with new cities
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }
  addCity = (newCity) => {
    this.setState((prevState) => ({
      cities: [...prevState.cities, newCity],
    }));
  };

  // Set up linking between screens and different js files
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/CityAdd">Add City</Link>
              </li>
              <li>
                <Link to="/CityList">City List</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/CityAdd"
                element={<CityAdd addCity={this.addCity} />}
              />
              <Route
                path="/CityList"
                element={<CityList cities={this.state.cities} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
