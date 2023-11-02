import React, { useState } from 'react';
import TikTokLogo from  "../../../public/TikTokLarge.png";
import DiscordLogo from "../../../public/DiscordLogo.png";
import SlackLogo from "../../../public/Slack.png";
import StratFlowLogo from "../../../public/logo.png";
import GoogleSheetsLogo from "/public/GoogleSheetsLogo.png";
import Image from "next/image";
const IntegrationsCarousel = () => {
    const carouselItems = [
        {
            id: 1,
            imageSrc: TikTokLogo ,
            headline: "TikTok Ads",
            text: 'Integrate your TikTok, and start using flows, strategies, scheduler and more... ',
            soon:false
        },
        {
            id: 2,
            imageSrc: SlackLogo,
            headline: "Slack",
            text: 'Connect your Slack account and get\n' +
                'notified whenever there is a trigger ofset.',
            soon:true
        },
        {
            id: 3,
            imageSrc: GoogleSheetsLogo,
            headline: "Google Sheets",
            text: 'Schedule your reports every set amount of days, straight to your Google Sheets',
            soon:true
        },
        {
            id: 4,
            imageSrc: DiscordLogo,
            headline: "Discord",
            text: 'Share your successes with others, and make yourcommunity... ',
            soon:true
        },
    ];

    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const handlePrevClick = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    const getCurrentRange = () => {
        const prevIndex = (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
        const nextIndex = (currentItemIndex + 1) % carouselItems.length;

        return [prevIndex, currentItemIndex, nextIndex];
    };

    const currentRange = getCurrentRange();

    return (
        <div className="carousel-container">
            <div className="carousel-items">
                <button className={"carousel-left-button"} onClick={handlePrevClick}>&#8249;</button>
                {currentRange.map((index) => {
                    const item = carouselItems[index];
                    return (
                        <div key={item.id} className="carousel-item">
                            <Image height={140} src={item.imageSrc} alt={`Item ${item.id}`} />
                                <p className={"carousel-item-headline"}>{item.headline}</p>
                            {item.soon ?
                                <p className={"carousel-comming-soon"}>(Coming Soon...)</p> :
                                <div style={{height: '27px', marginBottom:"33px"}}></div>
                            }




                            <p className={"carousel-item-text"}>{item.text}</p>
                            <div className={"carousel-item-buttons"}>
                            <button className="learn-more-button">Learn More</button>
                            <button className="connect-button">Connect</button>
                            </div>
                        </div>
                    );
                })}
                <button className={"carousel-right-button"} onClick={handleNextClick}>&#8250;</button>
            </div>

        </div>
    );
};

export default IntegrationsCarousel;
