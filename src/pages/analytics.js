import React from 'react';
import Header from "@/sections/common/header";

import Footer from "@/sections/common/footer";
import AnalyticsHero from "@/sections/analytics/Analytics-Hero";
import AnalyticsCardOne from "@/sections/analytics/AnalyticsCardOne";
import AnalyticsCardTwo from "@/sections/analytics/AnalyticsCardTwo";
import AnalyticsCTA from "@/sections/analytics/AnalyticsCTA";


const Analytics = () => {
    return (
        <div>
            <Header/>
            <AnalyticsHero/>
            <AnalyticsCardOne/>
            <AnalyticsCardTwo/>
            <AnalyticsCTA/>
            <Footer/>
        </div>
    );
};

export default Analytics;
