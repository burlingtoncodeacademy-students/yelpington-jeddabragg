import React, { useState, useEffect } from 'react';
import Map from './components/Map.js';
import './App.css';



function App() {
const [center, setCenter] = useState([44.4759, -73.2121])
  return (
    <>
    <h1>Yelpington</h1>
    <Map center={center} setCenter={setCenter}/>
    </>
  );
}

export default App;

