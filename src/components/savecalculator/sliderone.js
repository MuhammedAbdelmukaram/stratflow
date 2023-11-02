import React, { useState } from 'react';
import '../../assets/CTA.css';

const Sliderone = ({ onDisplayValueChange }) => { // Destructure the prop correctly
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);
        onDisplayValueChange(newValue);
    };

    const displayValue = Math.round(value); // Round the value to the nearest whole number

    return (
        <div className="slider-one-container">
            <input
                type="range"
                min={0}
                max={12}
                step={0.01}
                value={value}
                className="custom-slider-one"
                onChange={handleChange}
            />
            <div className="slider-one-value"></div>
        </div>
    );
};

export default Sliderone;
