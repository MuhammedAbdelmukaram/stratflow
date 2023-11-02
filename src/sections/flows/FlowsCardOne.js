import React, {Suspense} from 'react';
import Image from "next/image";
import AndIcon from "../../../public/AndIcon.png";
import OrIcon from "../../../public/OrIcon.png";
import Gif1 from "../../../public/Gif1.gif"


const MySVGAnimation = React.lazy(() => import('../../util/MySVGAnimation'));

const FlowsCardOne = () => {
    return (
        <div style={{height:500, paddingLeft:"20vw", paddingRight:"20vw",display:"flex", justifyContent:"center", backgroundColor:'#fff', color:'#000', paddingBottom:300, paddingTop:300}}>


            <div className={"flows-left-side-second-card"}>
                {/* Use Suspense to handle the loading state of the SVG */}
                <Image
                    src={Gif1}
                    height={355}
                    width={630}
                    alt={"GIF Animation"}
                />
            </div>

            <div className={"flows-right-side-second-card"}>
                <div className={"texts"}>
                    <div className={"flows-green-wrapper"}>
                        <div className={"flows-green-underline"}>
                            <span className={"flows-green-text"}>AND / OR</span>
                        </div>
                    </div>
                    <p className={"flows-card-heading"}>Super simple design</p>

                </div>
                <div className={"flows-three-bullets"}>
                    <div className={"flows-single-bullet"}>
                        <Image
                        src={AndIcon}
                        height={85}
                        alt={"and icon"}
                        ></Image>
                        <p className={"flows-bullet-text"}>Stack your rules one beneath the other, and they automatically work together, like a powerful AND command </p>
                    </div>
                    <div className={"flows-single-bullet"}>
                        <Image
                            src={OrIcon}
                            height={85}
                        alt={"or icon"}>

                        </Image>
                        <p className={"flows-bullet-text"}>If you want some flexibility, simply stack rules next to each other, and theyll behave as a OR, where you can assign unique action to both rules</p>
                    </div>


                </div>
            </div>



        </div>
    );
};

export default FlowsCardOne;
