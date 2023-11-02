import React from 'react';
import StrategiesCta from "@/sections/strategies/StrategiesCTA";
import StrategiesHero from "@/sections/strategies/Strategies-Hero";
import StrategiesCardOne from "@/sections/strategies/StrategiesCardOne";
import StrategiesBookDemo from "@/sections/strategies/StrategiesBookDemo";
import StrategiesThreeIcon from "@/sections/strategies/StrategiesThreeIcon";
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import Image from "next/image";
import StrategyA from "../../public/Strategy A.gif";
import StrategiesReviewStrat from "@/sections/strategies/StrategiesReviewStrat";
import StrategiesLine from "@/sections/strategies/StrategiesLine";

const Strategies = () => {
    return (
        <div>
            <Header/>





            <StrategiesHero/>

            <StrategiesCardOne/>



            <StrategiesThreeIcon/>
            <StrategiesBookDemo/>
            <StrategiesCta/>
            <Footer/>
        </div>
    );
};

export default Strategies;
