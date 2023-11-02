import React from 'react';
import Link from "next/link";
import GreyLine from "@/components/scalepausebudget/GreyLine";
import "../../assets/cheatsheet.css"

const CheatSheetHero = () => {
    return (
        <div className={"cheatsheet-hero-wrapper"}>`
            <div className={"cheatsheet-left-side-first-card"}>
                <div className={"cheatsheet-texts"}>
                    <div className={"cheatsheet-green-wrapper"}>
                        <div className={"cheatsheet-green-underline"}>
                            <span className={"cheatsheet-green-text"}>All in one place</span>
                        </div>
                    </div>

                    <p className={"cheatsheet-card-heading"}> We made best strats so you dont have to</p>
                    <p className={"cheatsheet-card-subtitle"}>Our compilation of most used and best performing flows ensures you get the most out of your ad spend. All you have to do is click “Use”, customize them to your need and let them roll
                    </p>

                    <div className={"cheatsheet-grey-line-wrapper"}> <GreyLine/> </div>
                </div>





            </div>
        </div>
    );
};

export default CheatSheetHero;
