import React from 'react';
import "../../assets/experts.css"
import Image from "next/image";
import demoImage from "../../../public/demopeople.png";
import Link from "next/link";
import GreyLine from "@/components/scalepausebudget/GreyLine";
const ExpertsHero = () => {
    return (
        <div className={"experts-hero-wrapper"}>
            <div className={"experts-left-side-first-card"}>
                <div className={"experts-texts"}>
                    <div className={"experts-green-wrapper"}>
                        <div className={"experts-green-underline"}>
                            <span className={"experts-green-text"}>All in one place</span>
                        </div>
                    </div>

                    <p className={"experts-card-heading"}> Stratflow Experts, Partners and more...</p>
                    <p className={"experts-card-subtitle"}>We partnered with the best of the best on the market, to make sure you get the best help you can.
                    </p>
                    <a href="https://discord.gg/7FRWAZwdr" target="_blank" rel="noopener noreferrer">
                        <button className="experts-demo-button">
                            Find the right expert
                        </button>
                    </a>

                    <div className={"experts-grey-line-wrapper"}> <GreyLine/> </div>
                </div>





            </div>
        </div>
    );
};

export default ExpertsHero;
