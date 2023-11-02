import React from 'react';
import Link from "next/link";
import GreyLine from "@/components/scalepausebudget/GreyLine";
import "../../assets/integrations.css"

const IntegrationsHero = () => {
    return (
        <div className={"integrations-hero-wrapper"}>
            <div className={"integrations-left-side-first-card"}>
                <div className={"integrations-texts"}>
                    <div className={"integrations-green-wrapper"}>
                        <div className={"integrations-green-underline"}>
                            <span className={"integrations-green-text"}>All in one place</span>
                        </div>
                    </div>

                    <p className={"integrations-card-heading"}> Our integrations offer great flexibility</p>
                    <p className={"integrations-card-subtitle"}>Our compilation of most used and best performing flows ensures you get
                        the most out of your ad spend. All you have to do is click “Use”, customize
                        them to your need and let them roll
                    </p>
                    <div className={"integrations-grey-line-wrapper"}> <GreyLine/> </div>
                </div>





            </div>
        </div>
    );
};

export default IntegrationsHero;
