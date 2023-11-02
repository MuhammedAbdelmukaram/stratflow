import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import "../assets/globals.css";
import IntegrationsHero from "@/sections/integrations/IntegrationsHero";
import IntegrationsCarousel from "@/sections/integrations/IntegrationsCarousel";
const Integrations = () => {
    return (
        <div>
            <Header/>
            <IntegrationsHero/>
            <IntegrationsCarousel/>
            <Footer/>
        </div>
    );
};

export default Integrations;
