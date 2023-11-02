import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../../assets/header.css";
import LogoImage from "../../../public/logo.png";
import DownArrow from "../../../public/downarrow.png";
import ProductsComponent from "@/components/common/ProductsComponent";
import IntegrationsComponent from "@/components/common/IntegrationsComponent";
import ResourcesComponent from "@/components/common/ResourcesComponent";

const HeaderContent = () => {
    // Define the hover menu options
    const hoverMenus = [
        { label: 'Products', component: <ProductsComponent /> },
        { label: 'Resources', component: <ResourcesComponent /> },
        { label: 'Integrations', component: <IntegrationsComponent /> },
    ];

    // State to track the currently hovered menu
    const [hoveredMenu, setHoveredMenu] = useState(null);

    // Handle hover menu display
    const handleHover = (index) => {
        // Set the currently hovered menu
        setHoveredMenu(index);
    };

    return (
        <header className={"header"}>
            {/* Image on the left */}
            <div className="header-left">
                <Link href={"/"} style={{alignItems:"flex-end", display:"flex"}}>
                    <Image src={LogoImage} width={50} height={50} alt={"logo image"} />
                </Link>
            </div>

            {/* Buttons with hover menus */}
            <div className="header-center">
                {hoverMenus.map((menu, index) => (
                    <div
                        key={index}
                        className={`hover-button ${hoveredMenu === index ? 'active' : ''}`}
                        onMouseOver={() => handleHover(index)}
                        onMouseOut={() => handleHover(null)}
                    >
                        <div className="hover-button-arrow">
                            <button className={"button-text"}>{menu.label}</button>
                            <Image src={DownArrow} height={12} width={10} alt={"arrow"} className={"arrow"}  />
                        </div>

                        <div className="hover-menu">
                            {menu.component}
                        </div>
                    </div>
                ))}
                <Link href="/signup">
                    <p className="nav-button-pricing">Pricing</p>
                </Link>
            </div>

            {/* Buttons on the right */}
            <div className="header-right">
                <Link href="/signup">
                    <p className="nav-button-demo">Get a demo</p>
                </Link>
                <Link href="/signup">
                    <p className="nav-button-free">Try for Free</p>
                </Link>
                <Link href="/signup">
                    <p className="nav-button-signin">Sign in</p>
                </Link>
            </div>
        </header>
    );
};

export default HeaderContent;
