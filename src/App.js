import React, { useState } from 'react';

const AngleSelector = () => {
  const [angle, setAngle] = useState(0);
  const [normalizedValue, setNormalizedValue] = useState(null);

  const normalizeAngle = (value) => {
    let normalized = ((value % 360) + 360) % 360;
    setNormalizedValue(normalized);
    return normalized;
  };

  const handleInputChange = (e) => {
    let inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      setAngle(normalizeAngle(inputValue));
    }
  };

  const handleSliderChange = (e) => {
    setAngle(normalizeAngle(parseInt(e.target.value, 10)));
  };

  const handleRadioChange = (value) => {
    setAngle(value);
  };

  const handleReset = () =>{
    setNormalizedValue(0);
  }

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Angle Selector using React</h1>

      <input
        value={normalizedValue}
        onChange={handleInputChange} 
        style={{ marginBottom: '20px', padding: '10px', width: '60px' }} 
      />
      <p></p>
      <button onClick={handleReset}>Reset value</button>


      <div style={{ margin: '20px' }}>
        <input 
          type="range" 
          min="0" 
          max="360" 
          value={angle} 
          onChange={handleSliderChange} 
        />
      </div>


      <div style={{ marginTop: '20px' }}>
        <label>
          <input 
            type="radio" 
            value="0" 
            checked={angle === 0} 
            onChange={() => handleRadioChange(0)} 
          /> 
          0
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input 
            type="radio" 
            value="45" 
            checked={angle === 45} 
            onChange={() => handleRadioChange(45)} 
          /> 
          45
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input 
            type="radio" 
            value="60" 
            checked={angle === 60} 
            onChange={() => handleRadioChange(60)} 
          /> 
          60
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input 
            type="radio" 
            value="90" 
            checked={angle === 90} 
            onChange={() => handleRadioChange(90)} 
          /> 
          90
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input 
            type="radio" 
            value="180" 
            checked={angle === 180} 
            onChange={() => handleRadioChange(180)} 
          /> 
          180
        </label>
      </div>
    </div>
  );
};

export default AngleSelector;
