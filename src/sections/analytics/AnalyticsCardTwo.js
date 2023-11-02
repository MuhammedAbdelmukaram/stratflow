import React from 'react';
import Image from "next/image";

import SecondBullet from "../../../public/CardBullet2.png";
import FirstBullet from "../../../public/CardBullet1.png";
import ThirdBullet from "../../../public/CardBullet3.png";
import "../../assets/analytics.css"
const AnalyticsCardTwo = () => {
    return (
        <div style={{height:500, paddingTop:30, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"space-between", backgroundColor:'#fff', color:'#000'}}>


            <div className={"analytics-left-side-first-card"}>
                <div className={"texts"}>
                    <div className={"analytics-green-wrapper"}>
                        <div className={"analytics-green-underline"}>
                            <span className={"analytics-green-text"}>Set your scaling on autopilot</span>
                        </div>
                    </div>
                    <p className={"analytics-card-heading"}>Reports every day, week, month</p>
                    <p className={"analytics-card-subtitle"}>Our compilation of most used and best performing flows ensures you get the most out of your ad spend. All you have to do is click “Use”, customize them to your need and let them roll</p>
                </div>

            </div>
            <div className={"analytics-right-side-first-card"}>
                <div className={"analytics-image-placeholder"}></div>
                {/*<Image></Image>*/}
            </div>


        </div>
    );
};

export default AnalyticsCardTwo;
