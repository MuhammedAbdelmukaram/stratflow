import React from 'react';
import { useRouter } from 'next/router';
import "../../assets/globals.css";


const App = ({ Component, pageProps }) => {
    const router = useRouter();

    // You can add any additional code or logic here if needed

    return <Component {...pageProps} />;
};

export default App;
