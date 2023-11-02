import React from 'react';
import Image from "next/image";
import Link from "next/link";
import TikTok from "../../../public/TikTok.png"
import DemoPeople from "../../../public/demopeople.png"
import LogoCta from "../../../public/LogoCTA.png"
import "../../assets/CTA.css"
const FlowsCta = () => {
    return (
        <div className={"home-cta-wrapper"}>

            <div className={"home-cta-mid-wrapper"}>

                <div className={"home-cta-image-box"}>
                    <Image
                        src={LogoCta}
                        height={220}
                        alt={"CTA logo"}
                    ></Image>
                </div>

                <div className={"home-cta-right-side"}>
                    <div>
                        <p className={"home-cta-text"}>CREATE FLOW NOW</p>
                        <div className={"home-cta-white-line"}></div>
                    </div>
                    <div className={"home-cta-buttons-wrapper"}>
                        <Link href={"/signup"} className={"home-cta-connect-account-wrapper"}>
                            <Image
                                className={"home-cta-connect-account-image"}
                                src={TikTok}
                                height={50}
                                alt={"TikTok logo"}
                            ></Image>
                            <button className={"home-cta-connect-account-button"}>Connect Your TikTok Account</button>
                        </Link>

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
                </div>

            </div>
        </div>
    );
};

export default FlowsCta;
