import React from 'react';
import Link from "next/link";
import Image from "next/image"
import demoImage from "../../../public/demopeople.png";
import TriggerAction from "../../../public/TriggerAction.png"
const AnalyticsHero = () => {
    return (
        <div style={{height:500, paddingTop:30, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"space-between", backgroundColor:'#fff', color:'#000'}}>


            <div className={"analytics-left-side-first-card"}>
                <div className={"analytics-texts"}>
                    <div className={"analytics-green-wrapper"}>
                        <div className={"analytics-green-underline"}>
                            <span className={"analytics-green-text"}>Drag and Drop</span>
                        </div>
                    </div>
                    <p className={"analytics-card-heading"}>Gain true insight in your ads performance</p>
                    <p className={"analytics-card-subtitle"}>Find what’s working and increase stakes. Elevate the game with our reports, delivering unparalleled insights that surpass TikToks Ordinary Analytics. </p>
                </div>

                <div className={"analytics-hero-buttons"}>
                    <Link href={"/signup"}>
                        <button className={"analytics-create-flow-button"}>Create Your Flow</button>
                    </Link>



                    <Link href={"/demo"}>
                        <button className={"analytics-demo-button"}>
                            <Image
                                src={demoImage}
                                height={31}
                                width={50}
                                alt={"demo image"}
                            ></Image>
                            Book a Demo</button>
                    </Link>

                </div>


            </div>
            <div className={"analytics-right-side-first-card"}>
                <Image
                    src={TriggerAction}
                    height={290}
                    alt={"trigger action"}></Image>
            </div>


        </div>
    );
};

export default AnalyticsHero;
