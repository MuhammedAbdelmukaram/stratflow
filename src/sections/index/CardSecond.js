import React from 'react';
import Image from "next/image";
import Detection from "../../../public/HeroImage3.png"
import Link from "next/link";
import arrowIcon from "../../../public/arrowIcon.png"
const CardSecond = () => {
    return (
        <div className={"card-second-wrapper"}>
            <div className={"left-side-second-card"}>
                <div className={"left-side-image-wrapper"}>
                    <Image
                    src={Detection}
                    height={480}
                    alt={"detection"}>
                    </Image>
                </div>
            </div>

            <div className={"right-side-second-card"}>
                <div className={"texts"}>
                    <div className={"green-wrapper"}>
                        <div className={"green-underline"}>
                            <span className={"green-text"}>End overspending worries</span>
                        </div>
                    </div>
                    <p className={"card-heading"}>Watch your game plan
                        perform
                        </p>
                    <p className={"card-subtitle-second-card"}>Plan out weeks and months for your campaigns, and let it run on autopilot</p>

                </div>
                <div className={"three-bullets"}>
                    <Link href={"/strategies"}>
                        <div className={"single-bullet"}>
                            {/*<Image></Image>*/}
                            <p className={"bullet-text-link"}>Learn how Strategies work  </p>
                            <Image
                                style={{marginLeft:10}}
                                src={arrowIcon}
                                      height={24}
                                      alt={"detection"}>

                            </Image>
                        </div>
                    </Link>



                </div>
            </div>



        </div>
    );
};

export default CardSecond;
