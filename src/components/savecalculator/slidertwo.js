import React, { useState } from 'react';
import '../../assets/CTA.css';

const Slidertwo = ({ onDisplayValueChange }) => {
    const [value, setValue] = useState(0);

    const valueLabels = [
        '$ 0-10K',
        '$ 10K-20K',
        '$ 20K-30K',
        '$ 30K-40K',
        '$ 40K-50K',
        '$ 50K-60K',
        '$ 60K-70K',
        '$ 70K-80K',
    ];

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        setValue(newValue);
        onDisplayValueChange(valueLabels[Math.round(newValue)]);
    };

    const displayValue = valueLabels[Math.round(value)];

    return (
        <div className="slider-two-container">
            <input
                type="range"
                min={0}
                max={7}
                step={1}
                value={value}
                className="custom-slider-two"
                onChange={handleChange}
            />
            <div className="slider-two-value"></div>
        </div>
    );
};

export default Slidertwo;
