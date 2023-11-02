import React from 'react';
import Link from "next/link";
import Image from "next/image";

import StrategiesHeroImage from "../../../public/strategieshero.png";
import "../../assets/strategies.css"
import IconsStrategies from "@/sections/strategies/IconsStrategies";
import demoImage from "../../../public/demopeople.png";
import "../../assets/hero.css";
const StrategiesHero = () => {
    return (
        <div style={{ paddingTop:200, paddingBottom:80, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center",backgroundColor:'#fff', color:'#000'}}>


            <div className={"strategies-left-side-first-card"}>
                <div className={"strategies-texts"}>
                    <div className={"strategies-green-wrapper"}>
                        <div className={"strategies-green-underline"}>
                            <span className={"strategies-green-text"}>Drag and Drop</span>
                        </div>
                    </div>
                    <p className={"strategies-card-heading"}>Strategies Manage Your Ads on Autopilot</p>
                    <p className={"strategies-card-subtitle"}>Over 20 pre-made profitable strategies, market tested, ready to use. Just choose the one that fits your needs. </p>
                    <div style={{display:"flex", flexDirection:"column",  justifyContent:"center", paddingTop:50}}>

                        <div style={{display:"flex", justifyContent:"flex-start"}}>
                            <IconsStrategies/>
                        </div>
                        <div style={{
                                display:"flex", alignItems:"center", paddingTop:60
                        }}>
                            <Link href={"/signup"} style={{display:"flex",justifyContent:"flex-start"}}>
                                <button className={"see-cheatsheat-button"}>See all strategies</button>
                            </Link>
                            <Link href={"/signup"}>
                                <button className={"demo-button"}>
                                    <Image
                                        src={demoImage}
                                        height={31}
                                        width={50}
                                        style={{marginLeft:-4, marginRight:7}}
                                        alt={"demo image"}
                                    ></Image>
                                    Book a Demo</button>
                            </Link>

                        </div>

                    </div>
                </div>

                <div className={"strategies-hero-images"}>


                </div>


            </div>
            <div className={"strategies-right-side-first-card"}>
                <Image

                    src={StrategiesHeroImage}
                    height={330}
                    alt={"trigger action"}></Image>
            </div>


        </div>
    );
};

export default StrategiesHero;
