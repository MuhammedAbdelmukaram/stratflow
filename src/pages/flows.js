import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import FlowsHero from "@/sections/flows/Flows-Hero";
import FlowsCardOne from "@/sections/flows/FlowsCardOne";
import FlowsCardTwo from "@/sections/flows/FlowsCardTwo";
import ScalePauseBudget from "@/sections/flows/ScalePauseBudget";
import FlowsCTA from "@/sections/flows/FlowsCTA";
import '../assets/globals.css';

const Flows = () => {
    return (
        <div>
            <Header/>
            <FlowsHero/>
            <FlowsCardOne/>

            {/*<FlowsCardTwo/>*/}
            <ScalePauseBudget/>
            <FlowsCTA/>
            <Footer/>
        </div>
    );
};

export default Flows;
