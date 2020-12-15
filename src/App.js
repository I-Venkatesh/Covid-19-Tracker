import './App.css';
import React, {useState, useEffect} from "react"
import { MenuItem, FormControl, Select} from '@material-ui/core';
import InfoBox from "./InfoBox";
import Table from "./Table";
import {sortData} from "./util";
import "./earth.jpg"
function App() {
  const [countries,setCountries] = useState(["India","USA"]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({}); 
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) => {
      setCountryInfo(data);
    })
  }, [])
  useEffect(() => {
    const getCountries = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name:country.country,
          value:country.countryInfo.iso2,
        }));
        const sortedData = sortData(data);
        setTableData(sortedData);
        setCountries(countries);
      });
    };
    getCountries();

  }, [])
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode)
    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })  
  } 
  return (
    <div className="app">
      <div class="upper">
        <h1 class="heading">Covid -19 Tracker</h1>
        <div className="app__header">
          <FormControl className="app__dropdown">
            <Select variant="outlined"
            onChange={onCountryChange}
            value={country}>
             <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
          <InfoBox title="Active:" cases={countryInfo.active}/>
          <InfoBox title="Recovered:" cases={countryInfo.recovered}/>
          <InfoBox title="Deaths:" cases={countryInfo.deaths}/>
        </div>
      </div>
      <div class="lower">
      {/* <canvas id="canvas1"> */}

        <h2 class="secondHeading">Live Cases by Country</h2>
        <div class="tab">
            <Table countries={tableData} />
        </div>
      </div>
      {/* </canvas> */}
    </div>
  );
}

export default App;
