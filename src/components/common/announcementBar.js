import React from 'react';
import Link from 'next/link';


const AnnouncementBar = () => {
    return (
        <div className="announcementBar">
            <div className="centeredContent">
                <span className="text">We just hit 6k early access members!</span>
                <a className="link" href={"https://discord.gg/7FRWAZwdr"} target={"_blank"}>JOIN OUR DISCORD</a>
            </div>
        </div>
    );
};

export default AnnouncementBar;
