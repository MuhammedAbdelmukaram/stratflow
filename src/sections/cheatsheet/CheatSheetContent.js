// components/cheatsheat/CheatSheetContent.js

import React from 'react';
import TableOfContents from '../../components/cheatsheat/TableOfContents';
import Strategyimage from '../../../public/strategieshero.png'
import Image from "next/image";
const CheatSheetContent = () => {
    const headlines = [
        {
            id: 'Scaling',
            title: 'Scaling',
            content: 'Our compilation of most used and best performing flows ensures you get\n' +
                'the most out of your ad spend. All you have to do is click “Use”, customize \n' +
                'them to your need and let them roll',
            subheadings: [
                { id: 'subheading-1-1', title: 'Subheading 1-1', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-1-2', title: 'Subheading 1-2', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-1-3', title: 'Subheading 1-3', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
            ],
        },
        {
            id: 'Pausing',
            title: 'Pausing',
            content: 'Our compilation of most used and best performing flows ensures you get\n' +
                'the most out of your ad spend. All you have to do is click “Use”, customize \n' +
                'them to your need and let them roll',
            subheadings: [
                { id: 'subheading-2-1', title: 'Subheading 2-1', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-2-2', title: 'Subheading 2-2', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-2-3', title: 'Subheading 2-3', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
            ],
        },
        {
            id: 'Adjusting Budget',
            title: 'Adjusting Budget',
            content: 'Our compilation of most used and best performing flows ensures you get\n' +
                'the most out of your ad spend. All you have to do is click “Use”, customize \n' +
                'them to your need and let them roll',
            subheadings: [
                { id: 'subheading-3-1', title: 'Subheading 3-1', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-3-2', title: 'Subheading 3-2', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-3-3', title: 'Subheading 3-3', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
            ],
        },
        {
            id: 'All in One',
            title: 'All in One',
            content: 'Our compilation of most used and best performing flows ensures you get\n' +
                'the most out of your ad spend. All you have to do is click “Use”, customize \n' +
                'them to your need and let them roll',
            subheadings: [
                { id: 'subheading-4-1', title: 'Subheading 4-1', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-4-2', title: 'Subheading 4-2', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
                { id: 'subheading-4-3', title: 'Subheading 4-3', content: 'Our compilation of most used and best performing flows ensures you get the most out of your ad spend. ', imageSrc: Strategyimage },
            ],
        },
        // Add more major headings and subheadings as needed
    ];


    return (
        <div className="content-container">
            <TableOfContents headlines={headlines} />
            <div className="content">
                {headlines.map((majorHeading) => (
                    <div key={majorHeading.id} className="content-wrapper">
                        <h1 id={majorHeading.id} className="content-major-heading">{majorHeading.title}</h1>
                        <p className="content-heading-paragraph">{majorHeading.content}</p>
                        <ul>
                            {majorHeading.subheadings.map((subheading) => (
                                <li key={subheading.id}>
                                    <h2 className="content-minor-subheading" id={subheading.id}>{subheading.title}</h2>
                                    <p className="content-paragraph">{subheading.content}</p>
                                    {subheading.imageSrc && <Image src={subheading.imageSrc} alt={subheading.title} width={500} className={"content-image"} />}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheatSheetContent;
