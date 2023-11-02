import React from 'react';
import "../../assets/cheatsheet.css"

const TableOfContents = ({ headlines }) => {
    const handleClick = (event, id) => {
        event.preventDefault();
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const yOffset = -120; // Set your desired offset value here
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className={"table-of-contents"}>
            <div className={"sticky-table-of-contents"}>
                <ul>
                    {headlines.map((majorHeading) => (
                        <li className={"major-heading"} key={majorHeading.id}>
                            <a className={"major-heading-text"} href={`#${majorHeading.id}`} onClick={(e) => handleClick(e, majorHeading.id)}>
                                {majorHeading.title}
                            </a>
                            {majorHeading.subheadings && (
                                <ul>
                                    {majorHeading.subheadings.map((subheading) => (
                                        <li className={"minor-subheading"} key={subheading.id}>
                                            <a href={`#${subheading.id}`} onClick={(e) => handleClick(e, subheading.id)}>
                                                {subheading.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TableOfContents;
