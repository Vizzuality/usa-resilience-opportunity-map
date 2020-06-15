import React from 'react';
import './App.scss';
import Map from './components/map';

function App() {
  return (
    <div className="c-app">
      <div className="app-sidebar"></div>
      <div className="map-wrapper">
        <Map />
      </div>
    </div>
  );
}

export default App;
