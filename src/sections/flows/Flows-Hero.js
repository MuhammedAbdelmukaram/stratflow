import React from 'react';
import Image from "next/image";
import SecondBullet from "../../../public/CardBullet2.png";
import FirstBullet from "../../../public/CardBullet1.png";
import ThirdBullet from "../../../public/CardBullet3.png";
import TriggerAction from "../../../public/TriggerAction.png"
import Link from "next/link";
import demoImage from "../../../public/demopeople.png";

const FlowsHero = () => {
    return (
        <div style={{height:500, paddingTop:110, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center", backgroundColor:'#fff', color:'#000'}}>


            <div className={"flows-left-side-first-card"}>
                <div className={"flows-texts"}>
                    <div className={"flows-green-wrapper"}>
                        <div className={"flows-green-underline"}>
                            <span className={"flows-green-text"}>Drag and Drop</span>
                        </div>
                    </div>
                    <p className={"flows-card-heading"}>Flows Manage Your Ads on Autopilot</p>
                    <p className={"flows-card-subtitle"}>Simply Drag and Drop your rule, customize it and let it roll. Give it some action
                        while at it, and never worry again about that campaign. </p>
                </div>

                <div className={"flows-hero-buttons"}>
                    <Link href={"/signup"}>
                        <button className={"flows-create-flow-button"}>Create Your Flow</button>
                    </Link>



                    <Link href={"/demo"}>
                        <button className={"flows-demo-button"}>
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
            <div className={"flows-right-side-first-card"}>
                <Image
                src={TriggerAction}
                height={290}
                width={510}
                alt={"trigger action"}></Image>
            </div>


        </div>
    );
};

export default FlowsHero;
