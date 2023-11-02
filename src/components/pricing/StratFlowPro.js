import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Checkmark from '../../../public/Checkmark.png'
import Image from "next/image";
const StratFlowPro = (props) => {




    return(

            <Card
                className={"card_plans"}
                style={{
                    width:340,
                    backgroundColor: '#212529',
                    borderRadius:25,
                    marginLeft:30,
                }}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{color:'#ffffff', marginLeft:30, marginTop: 30}}>

                        <h4 style={{
                            color: '#F2F2F2',
                            fontSize:14,
                            marginBottom:"1rem"}}>
                                            <span style={{
                                                fontWeight:600,
                                            }}>Stratflow </span>
                            Pro
                        </h4>

                        <p style={{fontSize:12}}>Starting at</p>
                        <p style={{fontSize:42, marginBottom:0, minWidth:143}}>${props.pricePro}</p>
                        <p style={{fontSize:12}}>Billed every 31 days</p>

                    </div>


                    <button

                        className={"button"}
                        style={{width:117, height:42, borderRadius:4, backgroundColor:'#06AD85', color:'#fff', alignItems:"center", position:"relative",top:115, left:35}}>
                        <p style={{fontSize:14, margin:0}}>Choose Plan</p>
                    </button>
                </div>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <hr style={{borderColor:'#fff', width:300}}/>
                </div>




                <div className={"features"} style={{marginLeft:30, marginBottom:25}}>
                    <p style={{color:'#fff', fontSize:10}}>All features include</p>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>5 TikTok accounts connections</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Unlimited number of flows</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Strategy preset access</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Insightful analytics and reports</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium utility tools</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom metrics</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Chat support</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Integrations</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                    </div>

                    <div style={{color:'#fff', display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium TikTok StratFlow group</p>
                    </div>


                </div>

            </Card>

    )
}

export default StratFlowPro;
