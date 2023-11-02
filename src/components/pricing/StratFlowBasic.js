import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import Checkmark from '../../../public/Checkmark.png'
import "../../assets/plans.css";
import Image from "next/image";



const StratFlowBasic = (props) => {


    return(

            <Card
                className={"card_plans"}
                style={{
                    width:340,
                    height:"fit-content",
                    backgroundColor: '#fff',
                    borderColor: '#000',
                    borderRadius:25,
                    marginTop: 35,
                }}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <div style={{color:'#000', marginLeft:30, marginTop: 30}}>

                        <h4 style={{
                            color: '#000',
                            fontSize:14}}>
                                            <span style={{
                                                fontWeight:600,
                                            }}>Stratflow </span>
                            Basic
                        </h4>

                        <p style={{fontSize:12}}>Starting at</p>
                        <p style={{fontSize:42, marginBottom:0, minWidth:143}}>${props.priceBasic}</p>
                        <p style={{fontSize:12}}>Billed every 31 days</p>

                    </div>

                    <button
                        className={"button"}
                        style={{width:117, height:42, borderRadius:4, backgroundColor:'#000', color:'#fff', alignItems:"center", position:"relative",top:115, left:35}}>
                        <p style={{fontSize:14, margin:0}}>Choose Plan</p>
                    </button>
                </div>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <hr style={{borderColor:'#000', width:300}}/>
                </div>




                <div className={"features"} style={{marginLeft:30, marginBottom:25, color:"#000"}}>
                    <p style={{color:'#000', fontSize:10}}>All features include</p>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>1 TikTok accounts connections</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>10 flows creation</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Strategy preset access</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Insightful analytics and reports</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium utility tools</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom metrics</p>
                    </div>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                        <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                        <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Chat support</p>
                    </div>

                </div>

            </Card>
    )
}

export default StratFlowBasic;
