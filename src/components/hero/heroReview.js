import React from 'react';
import Image from "next/image";
const HeroReview = (props) => {
    return (
        <div>
            <div className={"hero-single-review"}>
                <div className={"hero-review-text"}>
                    <p className={"hero-review-title"}>{props.title}</p>
                    <p className={"hero-review-result"}>{props.result}</p>
                </div>
                <div className={"hero-review-images"}>
                    <Image
                        src={props.profileImage}
                        height={60}
                        width={60}
                        alt={"profile image"}
                    ></Image>

                    <Image
                        src={props.companyImage}
                        height={100}
                        alt={"company image"}>

                    </Image>
                </div>
            </div>
        </div>
    );
};

export default HeroReview;
