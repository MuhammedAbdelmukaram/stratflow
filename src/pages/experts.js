import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import ExpertsHero from "@/sections/experts/Experts-Hero";
import ExpertsList from "@/sections/experts/Experts-List";
const Experts = () => {
    return (
        <div>
            <Header/>
            <ExpertsHero/>
            <ExpertsList/>
            <Footer/>
        </div>
    );
};

export default Experts;
