import React from 'react';
import Image from "next/image";
import StrategyA from "../../../public/Strategy A.gif";
import "../../assets/strategies.css"
import StrategyIcon1 from "../../../public/1.png"
import StrategyIcon2 from "../../../public/2.png"
import StrategyIcon3 from "../../../public/3.png"
import StrategyIcon4 from "../../../public/4.png"
import StrategyIcon5 from "../../../public/5.png"
import StrategyIcon6 from "../../../public/6.png"
import StrategyIcon7 from "../../../public/7.png"
import StrategyIcon8 from "../../../public/8.png"
import StrategyIcon9 from "../../../public/9.png"
import StrategyIcon10 from "../../../public/10.png"
import StrategyIcon11 from "../../../public/11.png"
import StrategyIcon12 from "../../../public/12.png"
const IconsStrategies = () => {
    return (
        <div style={{width:454, justifyContent:"center"}}>
                <div>
                        <Image
                            src={StrategyIcon1}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon2}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon3}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon4}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>



                        <Image
                            src={StrategyIcon5}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon6}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon7}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon8}
                            alt="StratIcon"
                            className={"icons-strategies"}>
                        </Image>





                        <Image
                            src={StrategyIcon9}
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon10}
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon11}
                            className={"icons-strategies"}>
                        </Image>
                        <Image
                            src={StrategyIcon12}
                            className={"icons-strategies"}>
                        </Image>


                </div>



        </div>
    );
};

export default IconsStrategies;
