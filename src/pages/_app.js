import React from 'react';
import "../assets/globals.css";
import '../assets/CTA.css';      // Global CTA styles
import '../assets/Signup.css';   // Global Signup styles
import '../assets/analytics.css'; // Global Analytics styles


const _app = ({ Component, pageProps }) => {

    return <Component {...pageProps} />;
};

export default _app;
