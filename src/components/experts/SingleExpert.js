import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const SingleExpert = (props) => {
    return (
        <div className={"experts-single-expert-wrapper"}>
            <Image
            src={props.company}
            height={70}
            alt={"company"}></Image>
            <p>{props.text}</p>
            <div className={"experts-card-bottom-side"}>
                <div className={"experts-card-image-name"}>
                    <Image
                        src={props.person}
                        alt={"human1"}
                        height={50}></Image>
                    <p className={"experts-card-person-name"}>{props.personName}</p>
                </div>
                <Link href={"/demo"}>
                    <button className={"experts-card-read-more-button"}>
                        Read more</button>
                </Link>
            </div>

        </div>
    );
};

export default SingleExpert;
