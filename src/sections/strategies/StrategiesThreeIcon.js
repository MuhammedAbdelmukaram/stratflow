import React from 'react';
import Image from "next/image";
import StrategiesHand from '../../../public/StrategiesHand.png'
import StrategiesShield from '../../../public/StrategiesShield.png'
import StrategiesPower from '../../../public/StrategiesPower.png'
import StrategiesHero from "@/sections/strategies/Strategies-Hero";

const StrategiesThreeIcon = () => {
    return (
        <div className={"strategies-three-icon-wrapper"}>

            {/*<p className={"strategies-three-icon-heading"}>Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.</p>
            */}
            <div className={"strategies-three-icons"}>
                <div className={"strategies-three-icon-single-column"}>
                    <Image
                    src={StrategiesHand}></Image>
                    <p className={"strategies-three-icon-header"}>Drag and Drop</p>
                    <p className={"strategies-three-icon-subtitle"}>Make your strategies in seconds</p>
                </div>
                <div className={"strategies-three-icon-single-column"}>
                    <Image
                    src={StrategiesPower}></Image>
                    <p className={"strategies-three-icon-header"}>Improve</p>
                    <p className={"strategies-three-icon-subtitle"}>Upgrade your strategies with features like midnight reset</p>
                </div>
                <div className={"strategies-three-icon-single-column"}>
                    <Image
                    src={StrategiesShield}></Image>
                    <p className={"strategies-three-icon-header"}>Maintain</p>
                    <p className={"strategies-three-icon-subtitle"}>Let it run for days, weeks, months..</p>
                </div>
            </div>

        </div>
    );
};

export default StrategiesThreeIcon;
