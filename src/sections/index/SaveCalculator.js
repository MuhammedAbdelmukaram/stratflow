import React, { useState } from 'react';
import '../../assets/savecalculator.css';
import Sliderone from '@/components/savecalculator/sliderone';
import Slidertwo from '@/components/savecalculator/slidertwo';

const SaveCalculator = () => {
    const [sliderOneValue, setSliderOneValue] = useState(0);
    const [sliderTwoValue, setSliderTwoValue] = useState("$ 0-10K");
    const [uniformNumber, setUniformNumber] = useState(1);
    const [correspondingValue, setCorrespondingValue] = useState('$ 2K-6K');


    const handleSliderOneValueChange = (newValue) => {
        setSliderOneValue(Math.round(newValue));
        const calculatedNumber = newValue * 0.65; // Adjust the multiplier as needed
        setUniformNumber(Number(calculatedNumber.toFixed(1)));
    };

    const handleSliderTwoValueChange = (newValue) => {
        setSliderTwoValue(newValue);
        setCorrespondingValue(getCorrespondingValue(newValue)); // Set the corresponding arbitrary string value
    };

    // Function to get the corresponding string value based on the SliderTwo value
    const getCorrespondingValue = (value) => {
        switch (value) {
            case '$ 0-10K':
                return '$ 2K-6K';
            case '$ 10K-20K':
                return '$ 4K-12K';
            case '$ 20K-30K':
                return '$ 8K-16K';
            case '$ 30K-40K':
                return '$ 12K-20K';
            case '$ 40K-50K':
                return '$ 16K-24K';
            case '$ 50K-60K':
                return '$ 20K-28K';
            case '$ 60K-70K':
                return '$ 24K-32K';
            case '$ 70K-80K':
                return '$ 28K-36K';
            default:
                return '$ 0K';
        }
    };

    return (
        <div className={'save-calculator-wrapper'}>

            <div className={'save-calculator-left-side'}>
                <p className={'save-heading'}>HOW MUCH CAN WE <span style={{backgroundColor:"#1a1a1a", paddingLeft:4, paddingRight:4}}>SAVE?</span></p>

                <div className={'sliders-wrapper'}>
                    <div className={'single-slider-wrapper'}>
                        <div className={'single-slider-texts'}>
                            <p className={'slider-question'}>
                                How much time do you spend on running ads daily?
                            </p>
                            <p className={'slider-value'}>{sliderOneValue} hrs</p>

                        </div>
                        <div className={'slider-one'}>
                            <Sliderone onDisplayValueChange={handleSliderOneValueChange} />
                        </div>
                    </div>

                    <div className={'single-slider-wrapper'}>
                        <div className={'single-slider-texts'}>
                            <p className={'slider-question'}>
                                What is your average daily ads spend?
                            </p>
                            <p className={'slider-value'}>{sliderTwoValue}</p>
                        </div>
                        <div className={'slider-two'}>
                            <Slidertwo onDisplayValueChange={handleSliderTwoValueChange} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={'save-calculator-right-side'}>
                <div className={'save-calculator-both'}>
                        <div className={"save-calculator-result-wrapper"}>
                            <div className={"save-calculator-single-result-wrapper"}>
                                <p className={"save-calculator-result"}>{uniformNumber} hrs</p>
                                <p className={"save-calculator-result-description"}>Time saved per day</p>
                            </div>
                            <div className={"save-calculator-single-result-wrapper"}>
                                <p className={"save-calculator-result"}>{correspondingValue}</p>
                                <p className={"save-calculator-result-description"}>Money saved per day</p>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    );
};

export default SaveCalculator;
