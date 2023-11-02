import React from 'react';

const GreyLine = () => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1278"
                height="2"
                viewBox="0 0 1278 2"
                fill="none"
            >
                <path
                    d="M1 1H1276.23"
                    stroke="url(#paint0_radial_697_60)"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <defs>
                    <radialGradient
                        id="paint0_radial_697_60"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(638.612 2.47507) rotate(-2.61711) scale(536.56 684235)"
                    >
                        <stop stopColor="#979797" stopOpacity="0.56" />
                        <stop offset="0.515625" stopColor="#CACACA" />
                        <stop offset="1" stopColor="#D9D9D9" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

export default GreyLine;
