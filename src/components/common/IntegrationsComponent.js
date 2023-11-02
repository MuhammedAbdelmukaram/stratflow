import React from 'react';
import Image from 'next/image';
import Integrations from '../../../public/Integrations.png'
import Link from "next/link";


const IntegrationsComponent = () => {
    return (
        <div style={{width:"100vw", height:330, marginLeft:"15vw", marginRight:"15vw", marginTop:20 }}>

            <div style={{display:"flex"}}>

                <div style={{display:"flex",flexDirection:"column"}}>
                    <span style={{textAlign:"center", marginBottom:20, fontWeight:"bold"}}>INTEGRATIONS</span>
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
                            <span className={"single-heading"}>WORKFLOW</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:150,width:"180px"}}>
                            <Link href="/integrations" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Tik Tok ads</p>
                                    <p className="small-text">Enhance your workflow with
                                        integrations  </p>
                                </div>
                            </Link>
                            <Link href="/integrations" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Slack</p>
                                    <p className="small-text">Enhance your workflow with
                                        integrations   </p>
                                </div>
                            </Link>
                            <Link href="/integrations" className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Google sheets</p>
                                    <p className="small-text">Enhance your workflow with
                                        integrations  </p>
                                </div>
                            </Link>
                        </div>
                    </div>



                    <div>
                        <div style={{display:"flex", marginLeft:20}}>
                            <span className={"single-heading"}>COMING SOON..</span>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", marginLeft:20,width:"180px"}}>
                            <Link href="/integrations"  className="heading-text">
                                <div className={"small-heading-text"}>
                                    <p className="small-heading">Facebook ads</p>
                                    <p className="small-text">Build flexible flows and reach your
                                        goals faster </p>
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

export default IntegrationsComponent;
