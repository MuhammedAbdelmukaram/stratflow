import React from 'react';
import Image from 'next/image';
import HeroReview from "@/components/hero/heroReview";
import Human1 from "../../../public/human1.png"
import Human2 from "../../../public/human2.png"
import Human3 from "../../../public/human3.png"
import Human4 from "../../../public/human4.png"
import Compnay1 from "../../../public/Company1.png"
import Compnay2 from "../../../public/Company2.png"
import Compnay3 from "../../../public/Company3.png"
import Compnay4 from "../../../public/Company4.png"

const HeroReviews = () => {
    return (
        <div style={{backgroundColor:"#fff"}} className={"hero-reviews-wrapper-wrapper"}>
            <div className={"hero-reviews-wrapper"}>

                <HeroReview
                    title={"TIME SAVED"}
                    result={"7HRS"}
                    profileImage={Human1}
                    companyImage={Compnay3}
                />

                <HeroReview
                    title={"ROAS"}
                    result={"3.1"}
                    profileImage={Human2}
                    companyImage={Compnay2}
                />


                <HeroReview
                    title={"REVENUE INCREASE"}
                    result={"230K"}
                    profileImage={Human3}
                    companyImage={Compnay1}
                />


                <HeroReview
                    title={"ANNUAL GROWTH"}
                    result={"46%"}
                    profileImage={Human4}
                    companyImage={Compnay4}
                />
            </div>

            <div style={{height:50, width:"100vw", backgroundColor:"#F8F8F8", paddingTop:30}}>

            </div>

        </div>
    );
};

export default HeroReviews;
