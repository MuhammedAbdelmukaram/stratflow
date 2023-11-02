import React from 'react';
import Image from 'next/image'import FirstBullet from "../../../public/CardBullet1.png"
import SecondBullet from "../../../public/CardBullet2.png"
import ThirdBullet from "../../../public/CardBullet3.png"
import HeroImage1 from "../../../public/Scale.png"
const CardFirst = () => {
    return (
        <div style={{height:500, paddingTop:200, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center", backgroundColor:'#fff'}}>


               <div className={"left-side-first-card"}>
                    <div className={"texts"}>
                        <div className={"green-wrapper"}>
                            <div className={"green-underline"}>
                                <span className={"green-text"}>Set your scaling on autopilot</span>
                            </div>
                        </div>
                        <p className={"card-heading"}>Every penny brings results</p>
                        <p className={"card-subtitle"}>Optimize your TikTok ads, and get the most out of your campaings, with
                            the help of of Stratflow automated flows</p>
                    </div>
                    <div className={"three-bullets"}>
                        <div className={"single-bullet"}>
                            <Image
                            src={SecondBullet}
                            height={50}
                            width={50}
                            alt={"second bullet"}></Image>
                            <p className={"bullet-text"}>Perform action based on the performance automatically </p>
                        </div>
                        <div className={"single-bullet"}>
                            <Image
                                src={FirstBullet}
                                height={50}
                                width={50}
                            alt={"first bullet"}></Image>
                            <p className={"bullet-text"}>Works at campaing, ad group, and ad level</p>
                        </div>
                        <div className={"single-bullet"}>
                            <Image
                                src={ThirdBullet}
                                height={50}
                                width={50}
                            alt={"third bullet"}></Image>
                            <p className={"bullet-text"}>Day parting, boosting at specific hours and more...</p>
                        </div>

                    </div>
               </div>
                <div className={"right-side-first-card"}>

                    <div className={"image-container"}>
                        <Image
                            src={HeroImage1}
                            height={480}
                            width={480}
                            alt={"third bullet"}></Image>
                    </div>

                </div>


        </div>
    );
};

export default CardFirst;
