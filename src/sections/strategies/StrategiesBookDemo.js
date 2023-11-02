import React from 'react';
import Image from "next/image";
import DemoPeople from "../../../public/demopeople.png";
import Link from "next/link";
import StrategiesDemoBoxes from "@/components/strategies/strategiesDemoBoxes";

const StrategiesBookDemo = () => {
    return (
        <div className={"strategies-book-demo-wrapper"}>

            <div className={"strategies-book-demo-left-side"}>
                <div className={"strategies-book-demo-texts"}>
                    <span className={"strategies-book-demo-text"}>See what</span>
                    <span className={"strategies-book-demo-text"}>automation can do</span>
                    <span className={"strategies-book-demo-text"}>for you</span>
                </div>
                <Link href={"/demo"} className={"home-cta-demo-wrapper"}>
                    <Image
                        className={"home-cta-connect-account-image"}
                        src={DemoPeople}
                        height={50}
                        alt={"demo people"}
                    ></Image>
                    <button className={"home-cta-book-demo"}>Book a Demo</button>
                </Link>
            </div>

            <div className={"strategies-book-demo-right-side"}>


                <div>
                <StrategiesDemoBoxes/>
                </div>
                <div className={"strategies-book-demo-box-shift-one"}>
                    <StrategiesDemoBoxes/>
                </div>
                <div className={"strategies-book-demo-box-shift-two"}>
                    <StrategiesDemoBoxes/>
                </div>



            </div>
        </div>
    );
};

export default StrategiesBookDemo;
