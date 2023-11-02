import React from 'react';
import Image from "next/image";
import SecondBullet from "../../../public/CardBullet2.png";
import FirstBullet from "../../../public/CardBullet1.png";
import ThirdBullet from "../../../public/CardBullet3.png";

const FlowsCardTwo = () => {
    return (
        <div style={{height:500, paddingTop:30, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center", backgroundColor:'#fff', color:'#000'}}>


            <div className={"flows-left-side-first-card"}>
                <div className={"texts"}>
                    <div className={"flows-green-wrapper"}>
                        <div className={"flows-green-underline"}>
                            <span className={"flows-green-text"}>Set your scaling on autopilot</span>
                        </div>
                    </div>
                    <p className={"flows-card-heading"}>Every penny brings results</p>
                    <p className={"flows-card-subtitle"}>Optimize your TikTok ads, and get the most out of your campaings, with
                        the help of of Stratflow automated flows</p>
                </div>
                <div className={"flows-three-bullets"}>
                    <div className={"flows-single-bullet"}>
                        <Image
                            src={SecondBullet}
                            height={50}
                            width={50}
                            alt={"second bullet"}></Image>
                        <p className={"flows-bullet-text"}>Perform action based on the performance automatically </p>
                    </div>
                    <div className={"flows-single-bullet"}>
                        <Image
                            src={FirstBullet}
                            height={50}
                            width={50}
                            alt={"first bullet"}></Image>
                        <p className={"flows-bullet-text"}>Works at campaing, ad group, and ad level</p>
                    </div>
                    <div className={"flows-single-bullet"}>
                        <Image src={ThirdBullet}
                               height={50}
                               width={50}
                               alt={"third bullet"}></Image>
                        <p className={"flows-bullet-text"}>Day parting, boosting at specific hours and more...</p>
                    </div>

                </div>
            </div>
            <div className={"flows-right-side-first-card"}>
                <div className={"flows-image-placeholder"}></div>
                {/*<Image></Image>*/}
            </div>


        </div>
    );
};

export default FlowsCardTwo;
