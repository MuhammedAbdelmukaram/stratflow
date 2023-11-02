import React from 'react';
import Header from "@/sections/common/header";
import Footer from "@/sections/common/footer";
import "../assets/globals.css";
import CheatSheetHero from "@/sections/cheatsheet/CheatSheetHero";
import CheatSheetContent from "@/sections/cheatsheet/CheatSheetContent";
const Cheatsheat = () => {
    return (
        <div>
            <Header/>
            <CheatSheetHero/>
            <CheatSheetContent/>
            <Footer/>
        </div>
    );
};

export default Cheatsheat;
