import React from 'react';
import Image from "next/image";
import SecondBullet from "../../../public/CardBullet2.png";
import FirstBullet from "../../../public/CardBullet1.png";
import ThirdBullet from "../../../public/CardBullet3.png";
import HeroImage1 from "../../../public/HeroImage1.png";
import arrowIcon from "../../../public/arrowIcon.png";
import Link from "next/link";

const CardThird = () => {
    return (
        <div style={{height:700, paddingTop:550, paddingBottom:350,paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center", backgroundColor:'#fff', }}>


            <div className={"left-side-first-card"}>
                <div className={"texts"} style={{marginBottom:70}}>
                    <div className={"green-wrapper"}>
                        <div className={"green-underline"}>
                            <span className={"green-text"}>Monitoring system</span>
                        </div>
                    </div>
                    <p className={"card-heading"}>We detect when ads go bad</p>
                    <p className={"card-subtitle-three"}> <span style={{fontWeight:"600"}}>Overspending or underspending?</span> Stratflow engine works 24/7, watching over your campaigns</p>
                    <p className={"card-subtitle-second-card"}><span style={{fontWeight:"600"}}>Haven’t checked ads in a while?</span> - no worries, you dont have to. We make sure everything is in check while you are away.</p>

                </div>
                <Link href={"/signup"}>
                    <div className={"single-bullet"} style={{justifyContent:"flex-end"}}>
                        {/*<Image></Image>*/}
                        <p className={"bullet-text-link"}>Try Stratflow Pro  </p>
                        <Image
                            style={{marginLeft:10}}
                            src={arrowIcon}
                            height={24}
                            alt={"detection"}>

                        </Image>
                    </div>
            </Link>
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

export default CardThird;
