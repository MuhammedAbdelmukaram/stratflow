import React from 'react';
import Link from "next/link";
import GreyLine from "@/components/scalepausebudget/GreyLine";


const BlogHero = () => {
    return (
        <div className={"blog-hero-wrapper"}>
            <div className={"blog-left-side-first-card"}>
                <div className={"blog-texts"}>
                    <div className={"blog-green-wrapper"}>
                        <div className={"blog-green-underline"}>
                            <span className={"blog-green-text"}>All in one place</span>
                        </div>
                    </div>

                    <p className={"blog-card-heading"}> Latest Strategies, insights, changes on TikTok ads</p>
                    <p className={"blog-card-subtitle"}>Stay up to date with changing dynamics of TikTok ads. Get the knowledge to launch your e-commerce brand beyond the moon
                    </p>
                    {/*
                    <Link href={"/demo"}>
                        <button className={"blog-demo-button"}>
                            Find the right expert</button>
                    </Link>
                    */}

                    <div className={"blog-grey-line-wrapper"}> <GreyLine/> </div>
                </div>

            </div>
            <p style={{display:"flex", justifyContent:"center", paddingTop:60, fontSize:40, color:"#888888"}}>Comming Soon...</p>
        </div>
    );
};

export default BlogHero;
