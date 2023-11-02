import React from 'react';
import AnnouncementBar from '../components/common/announcementBar';
import '../assets/globals.css';
import Header from "@/sections/common/header";
import Hero from "@/sections/index/hero";
import HeroReviews from "@/sections/index/hero-reviews";
import CardFirst from "@/sections/index/CardFirst";
import CardSecond from "@/sections/index/CardSecond";
import CardThird from "@/sections/index/CardThird";
import Reviews from "@/sections/index/Reviews";
import Footer from "@/sections/common/footer";
import Cta from "@/sections/index/CTA";
import SaveCalculator from "@/sections/index/SaveCalculator";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <HeroReviews/>
            <div style={{backgroundColor:"white"}}>
                <CardFirst/>
                <CardSecond/>
                <CardThird/>
            </div>
            <div style={{backgroundColor:"white"}}>
                <SaveCalculator/>
            <Reviews/>
            </div>

            <Cta/>
            <Footer/>
        </div>
    );
};

export default HomePage;
