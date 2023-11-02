import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Company4 from "../../../public/Company4.png"
import Company1 from "../../../public/Company1.png"
import Company2 from "../../../public/Company2.png"
import Company3 from "../../../public/Company3.png"
import Company5 from "../../../public/Company5.png"
import Man from "../../../public/Man.png"
import ReviewIndicators from "@/components/reviews/ReviewIndicators";
const Reviews = () => {

    const [currentReview, setCurrentReview] = useState(0);
    const [direction, setDirection] = useState("right");


    const [animation, setAnimation] = React.useState("");

    useEffect(() => {
        setAnimation(`entering-${direction}`);
        const timeout = setTimeout(() => {
            setAnimation("entered");
        }, 500);
        return () => clearTimeout(timeout);
    }, [currentReview, direction]);


    const reviews = [
        {
            text: "Whether you are trying to scale your ads, or simply decided to automate some of the tasks you do during the day on ads manager, the only way to attain larger profits is to off-source time consuming tasks, preferably to non-human.",
            image: Company4,
            name: "Josh Greboza, CEO - Bee Colony",
            title: "TikTok Executive Adviser"
        },
        {
            text: "Every minute counts, especially in advertising. If you're looking to elevate your campaigns or simplify tasks on the ads manager, consider automation. It's the bridge to greater efficiency and profitability.\n" +
                "\n",
            image: Company2,
            name: "Anne White, CEO - Grinch Media",
            title: "TikTok Executive Adviser"
        },
        {
            text: "Time and money are two sides of the same coin. Whether you're ramping up your ads or seeking efficiency in daily tasks on the ads manager, automation can be your ticket to better returns.\n" +
                "\n",
            image: Company3,
            name: "Basu Supran, Ad Et",
            title: "TikTok Executive Adviser"
        },
        {
            text: "Harnessing the power of automation can redefine how we view time in the advertising realm. By offloading routine tasks, especially on the ads manager, we pave the way for enhanced profitability.\n" +
                "\n",
            image: Company1,
            name: "James Michael, CEO - Cashing INC",
            title: "TikTok Executive Adviser"
        },

        // ... Add more reviews here
    ];

    const handleNextReview = () => {
        setDirection("right");
        setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    };

    const handlePrevReview = () => {
        setDirection("left");
        setCurrentReview((prevReview) => (prevReview - 1 + reviews.length) % reviews.length);
    };




    return (
        <div className={"reviews-wrapper"}>
            <div className={"reviews-inner-wrapper"}>
                <div className={`reviews-left-side ${animation}`}>

                    <div className={"reviews-and-indicator"}>
                        <div className="reviews-buttons">
                            <button className="review-button minus-button" onClick={handlePrevReview}>
                                <div className="triangle left-triangle"></div>
                            </button>
                            <button className="review-button plus-button" onClick={handleNextReview}>
                                <div className="triangle right-triangle"></div>
                            </button>
                        </div>
                        <ReviewIndicators current={currentReview} total={reviews.length} />
                    </div>




                    <div>

                    </div>

                    <p className={"review-text"}>{reviews[currentReview].text}</p>
                    <div className={"black-line"}></div>
                    <div className={"under-text"}>
                        <Image
                            src={reviews[currentReview].image}
                            height={75}
                            alt={"company image"}
                        ></Image>
                        <p className={"review-name"}>{reviews[currentReview].name}</p>
                        {/*<p className={"review-title"}>{reviews[currentReview].title}</p>*/}
                    </div>

                </div>

                <div className={"image-man"}>
                    <Image
                    src={Man}
                    height={250}
                    alt={"man"}
                    ></Image>
                </div>

            </div>
        </div>
    );
};

export default Reviews;
