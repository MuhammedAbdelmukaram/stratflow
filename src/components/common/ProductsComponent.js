import React from 'react';
import "../../assets/header.css";
import Image from 'next/image';
import Products from "../../../public/products.png";
import Link from "next/link";
const ProductsComponent = () => {
    return (
        <div style={{width:"100vw", height:330, marginLeft:"15vw", marginRight:"15vw", paddingTop:20 }}>

            <div style={{display:"flex"}}>

                <div style={{display:"flex",flexDirection:"column"}}>
                    <span style={{textAlign:"center", marginBottom:20, fontWeight:"bold"}}>PRODUCTS</span>
                    <Image
                        src={Products}
                        height={120}
                        width={120}
                        alt={"Products"}
                    ></Image>
                </div>

                <div style={{display:"flex"}}>

                    <div>
                        <div style={{display:"flex", marginLeft:150}}>
                            <span className={"single-heading"}>FLOWS</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:150,width:"180px"}}>
                            <Link href="/flows/#SPB"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">How it works?</p>
                                    <p className="small-text">Learn the basics </p>
                                </div>
                            </Link>
                        </div>
                    </div>



                    <div>
                        <div style={{display:"flex", marginLeft:20}}>
                            <span className={"single-heading"}>FEATURES</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:20,width:"180px"}}>
                            <Link href="/flows"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Flows</p>
                                    <p className="small-text">Build flexible flows and reach your
                                        goals faster </p>
                                </div>
                            </Link>
                            <Link href="/strategies" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Strategies</p>
                                    <p className="small-text">Combine flows into strategies for
                                        timing, scaling, testing and pausing</p>
                                </div>
                            </Link>
                            {/*<Link href="/analytics" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Analytics</p>
                                    <p className="small-text">Transform data into a meaningful
                                        marketing report </p>
                                </div>
                            </Link>*/}
                        </div>
                    </div>


                    <div>
                        <div style={{display:"flex", marginLeft:40}}>
                            <span className={"single-heading"}>SOLUTIONS</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:40,width:"180px"}}>
                            <Link href="/flows/#SPB"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Scale</p>
                                    <p className="small-text">Automate scaling of creatives,
                                        campaigns and ad groups  </p>
                                </div>
                            </Link>
                            <Link href="/flows/#SPB" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Pause</p>
                                    <p className="small-text">Pause underperforming ad groups
                                        and ads</p>
                                </div>
                            </Link>
                            <Link href="/flows/#SPB" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading" >Adjust budget</p>
                                    <p className="small-text">Time profitable windows during the
                                        day and automatically set budgets </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={"box-news"}>
                    <p className={"box-heading"}>What&#39;s New?</p>


                </div>


            </div>

        </div>
    );
};

export default ProductsComponent;
