import React from 'react';
import "../../assets/header.css";
import Image from "next/image";
import Integrations from "../../../public/Integrations.png";
import Link from "next/link";

const ResourcesComponent = () => {
    return (
        <div style={{width:"100vw", height:330, marginLeft:"15vw", marginRight:"15vw", marginTop:20 }}>

            <div style={{display:"flex"}}>

                <div style={{display:"flex",flexDirection:"column"}}>
                    <span style={{textAlign:"center", marginBottom:20, fontWeight:"bold"}}>RESOURCES</span>
                    <Image
                        src={Integrations}
                        height={120}
                        width={120}
                        alt={"integrations"}
                    ></Image>
                </div>

                <div style={{display:"flex"}}>

                    <div>
                        <div style={{display:"flex", marginLeft:150}}>
                            <span className={"single-heading"}>KNOWLEDGE</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:150,width:"180px"}}>
                            <Link href="/experts"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Experts</p>
                                    <p className="small-text">Create better flows with industries top experts </p>
                                </div>
                            </Link>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:150,width:"180px"}}>
                            <Link href="/blog"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Blog</p>
                                    <p className="small-text">Discover our guides, new strats and more</p>
                                </div>
                            </Link>
                        </div>
                    </div>




                    <div>
                        <div style={{display:"flex", marginLeft:20}}>
                            <span className={"single-heading"}>MISCELLANEOUS</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:20,width:"180px"}}>
                            <Link href="/cheatsheat"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Cheat Sheat</p>
                                    <p className="small-text">Build flexible flows for all your goals with pre-built strats  </p>
                                </div>
                            </Link>
                            <Link href="https://discord.gg/7FRWAZwdr" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Community</p>
                                    <p className="small-text">Join our community and find like
                                        minded marketers</p>
                                </div>
                            </Link>
                            {/*<Link href="/help" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Help Center</p>
                                    <p className="small-text">Find answers to frequent
                                        questions and issues</p>
                                </div>
                            </Link>*/}
                            <Link href="/integrations" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Integrations</p>
                                    <p className="small-text">Enhance your workflow with
                                        integrations   </p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div>
                        <div style={{display:"flex", marginLeft:40}}>
                            <span className={"single-heading"}>&nbsp;</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:40,width:"180px"}}>


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

export default ResourcesComponent;
