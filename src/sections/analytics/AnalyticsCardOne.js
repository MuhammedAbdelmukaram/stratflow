import React from 'react';
import Image from "next/image";
import AndIcon from "../../../public/AndIcon.png";
import OrIcon from "../../../public/OrIcon.png";

const AnalyticsCardOne = () => {
    return (
        <div style={{height:500, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"space-between",backgroundColor:'#fff', color:'#000'}}>


            <div className={"analytics-left-side-second-card"}>
                <div className={"analytics-image-placeholder"}></div>
                {/*<Image></Image>*/}
            </div>

            <div className={"analytics-right-side-second-card"}>
                <div className={"texts"}>
                    <div className={"analytics-green-wrapper"}>
                        <div className={"analytics-green-underline"}>
                            <span className={"analytics-green-text"}>AND / OR</span>
                        </div>
                    </div>
                    <p className={"analytics-card-heading"}>Observe performance in real-time</p>

                </div>
                <div className={"analytics-three-bullets"}>
                    <div className={"analytics-single-bullet"}>
                        <Image
                            src={AndIcon}
                            height={85}
                            alt={"and icon"}
                        ></Image>
                        <p className={"analytics-bullet-text"}>Each rule and action have their unique performance metrics, including the funds spend, funds saved and number of triggers per camgain, ad group, ads</p>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default AnalyticsCardOne;
