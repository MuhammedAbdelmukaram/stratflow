import React, {useState} from 'react';
import Image from "next/image";
import AndIcon from "../../../public/AndIcon.png";
import OrIcon from "../../../public/OrIcon.png";
import Human1 from "../../../public/human1.png"
import Company1 from "../../../public/Company1.png"
import StrategyA from "../../../public/Strategy A.gif"
import StrategyB from "../../../public/Strategy B.gif"
import IconsStrategies from "@/sections/strategies/IconsStrategies";
import Link from "next/link";
import StrategiesReviewStrat from "@/sections/strategies/StrategiesReviewStrat";
const StrategiesCardOne = () => {

    const [activeStrategy, setActiveStrategy] = useState('A');

    return (


        <div style={{ display:"flex", flexDirection:"column", backgroundColor:'#fff', color:'#000', paddingTop:100}}>


            <div className={"strategies-right-side-second-card"}>
                {/*<div className={"texts"}>
                    <div className={"strategies-green-wrapper"}>
                        <div className={"strategies-green-underline"}>
                            <span className={"strategies-green-text"}>SCHEDULER</span>
                        </div>
                    </div>
                    <p className={"strategies-card-heading"}>Combine Flows and Make Strategies</p>

                </div>*/}
                <div style={{display:"flex", width:"100vw", backgroundColor:"#06ad85", justifyContent:"center",paddingBottom:30, paddingTop:30}}>


                <div style={{backgroundColor:"#06ad85", display:"flex", paddingTop:84, justifyContent:"center", paddingBottom:100, marginTop:20, marginRight:"10vw"}}>
                    {<Image
                        src={activeStrategy === 'A' ? StrategyA : StrategyB} // Assuming you've imported StrategyB similar to StrategyA
                        style={{height:"18vw", width:"auto"}}></Image>}

                </div>

                    <div style={{display:"flex", backgroundColor:"#06ad85", alignItems:"center", borderLeft: '1px solid #ffffff'}}>


                    <div className={"strategies-three-bullets"}>
                            <div style={{marginBottom:"10%" }}>
                                <p style={{fontSize:"1.8vw", fontWeight:"500", color:"white", backgroundColor:"#1a1a1a", paddingLeft:18, paddingRight:8 }} className={"green-area-heading"}>Schedule your campaigns for weeks </p>
                            </div>
                            <div className={"strategies-single-bullet"}>
                                <p className={"strategies-bullet-text"}>Set your game plan in motion for days, even weeks </p>
                            </div>

                            <div className={"strategies-single-bullet"}>
                                <p className={"strategies-bullet-text"}>Check out examples of strategies: </p>
                            </div>
                            <button onClick={() => setActiveStrategy('A')} className={activeStrategy === 'A' ? "strategies-bullet-text-button-active" : "strategies-bullet-text-button"}>
                                Fast Scaling conversions
                            </button>
                            <button onClick={() => setActiveStrategy('B')} className={activeStrategy === 'B' ? "strategies-bullet-text-button-active" : "strategies-bullet-text-button"}>
                                Safety first
                            </button>

                    </div>

                    </div>

                </div>




            </div>



        </div>
    );
};

export default StrategiesCardOne;
