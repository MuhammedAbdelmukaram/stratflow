import {Card} from "react-bootstrap";
import React from "react";
import StratFlowPro from "./StratFlowPro";
import Checkmark from '../../../public/Checkmark.png'
import Image from "next/image";

const StratFlowEnterprise = () => {
    return(
        <Card
            className={"card_plans"}
            style={{
                width:340,
                height:"fit-content",
                backgroundColor: '#fff',
                borderColor: '#000',
                borderRadius:25,
                marginLeft:30,
                marginTop:35,

            }}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{color:'#000', marginLeft:30, marginTop: 30}}>

                    <h4 style={{
                        color: '#000',
                        fontSize:14}}>
                                        <span style={{
                                            fontWeight:600,
                                        }}>Enterprise </span>

                    </h4>

                    <p style={{fontSize:42, marginBottom:0}}>Lets Talk</p>
                    <p style={{fontSize:12, marginBottom:5}}>Custom plan for teams and large organizations tailored to
                        your needs
                    </p>

                </div>

                <div style={{textAlign:"right", marginRight:15}}>
                    <button
                        className={"button"}
                        style={{width:117, height:42, borderRadius:4, backgroundColor:'#000', color:'#fff', alignItems:"center", position:"relative"}}>
                        <p style={{fontSize:14, margin:0}}>Choose Plan</p>
                    </button>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <hr style={{borderColor:'#000', width:300}}/>
            </div>




            <div className={"features"} style={{marginLeft:30, marginBottom:25, color:"#000"}}>
                <p style={{color:'#000', fontSize:10}}>All features PLUS</p>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Onboarding help</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom strategy planning</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom flows creation with our experts</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Custom integrations</p>
                </div>

                <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom:7}}>
                    <Image src={Checkmark} alt="checkmark" style={{height:26, width:26}}/>
                    <p style={{fontSize:12, marginBottom:0, marginLeft:7}}>Premium support</p>
                </div>

            </div>

        </Card>
    )
}

export default StratFlowEnterprise;
