import React from 'react';
import './App.css';
import DigitalClock from './DigitalClock';
import WorkTimer from './WorkTimer';

function App() {
  return (
    <div className="ModernApp">
      <div className="center-column">
        <DigitalClock />
        <WorkTimer />
      </div>
    </div>
  );
}

export default App;
