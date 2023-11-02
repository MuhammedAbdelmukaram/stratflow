import React from 'react';
import Image from "next/image";
import Company1 from "../../../public/Company1.png";
import Human1 from "../../../public/human1.png";
import IconsStrategies from "@/sections/strategies/IconsStrategies";
import Link from "next/link";

const StrategiesReviewStrat = () => {
    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center" , paddingTop:20, paddingLeft:"20vw", paddingRight:"20vw",  backgroundColor:'#fff', color:'#000',  paddingBottom:100}}>



            <div className={"strategies-review-wrapper"}>
                <Image
                    src={Company1}
                    height={70}></Image>
                <p style={{color:'#000'}}>People say time is money and it is an understatement. Whether you are trying to scale your ads, or simply decided to automate some of the tasks you do during the day on ads manager.</p>
                <Image
                    className={"strategies-human-image"}
                    height={60}
                    src={Human1}></Image>
            </div>

            <div style={{flex:1}}>

            </div>








        </div>
    );
};

export default StrategiesReviewStrat;
