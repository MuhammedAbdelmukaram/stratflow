import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import "../assets/globals.css";
import Plans from "@/components/pricing/Plans";
const Pricing = () => {
    return (
        <div>
            <Header/>

            <Plans/>

            <Footer/>
        </div>
    );
};

export default Pricing;
