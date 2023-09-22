import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const apiKey = "daaa2761f467b086ba57f342bb2ec8d1"; 

  const getLocation = (event) => {
    setLocation(event.target.value);
  }

  const getData = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      axios.get(url).then((response) => {
        setData(response.data);
      });

      setLocation('');
    }
  }

  return (
    <div className="app">
      <div className='top'>
        <input type="text" placeholder='Enter Location' value={location} onChange={getLocation} onKeyPress={getData}></input>
      </div>
      <div className='mid-div'>
        <h2>{data.name}</h2>
        {data.main ? <p>{data.main.temp}°C</p> : null}
        {data.weather ? <h2 className='description'>{data.weather[0].main}</h2> : null}
      </div>
      <div className='footer'>
        <div>
          {data.main ? <h4 className='bold'>{data.main.feels_like} °C</h4> : null}
          <p>Feels Like</p>
        </div>
        <div>
          {data.main ? <h4 className='bold'>{data.main.humidity}%</h4> : null}
          <p>Humidity</p>
        </div>
        <div>
          {data.wind ? <h4 className='bold'>{data.wind.speed}MPH</h4> : null}
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
