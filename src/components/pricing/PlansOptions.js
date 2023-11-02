import React, {useState} from 'react';
import StratFlowBasic from "../../components/pricing/StratFlowBasic";
import StratFlowPro from "../../components/pricing/StratFlowPro";
import StratFlowEnterprise from "../../components/pricing/StratFlowEnterprise";
import "../../assets/plans.css";

const PlansOptions = (props) => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const handleMonthlyToggle = () => {
        if (billingPeriod !== "monthly") {
            setBillingPeriod("monthly");
        }
    };

    const handleYearlyToggle = () => {
        if (billingPeriod !== "yearly") {
            setBillingPeriod("yearly");
        }
    };

    const priceBasic = billingPeriod === 'monthly' ? 49.99 : 29.99;
    const pricePro = billingPeriod === 'monthly' ? 69.99 : 39.99;

    return (

            <div style={{paddingTop:35, backgroundColor:"#fff"}}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{
                        width:70,
                        fontSize:12,
                        borderTopLeftRadius:15,
                        borderBottomLeftRadius:15,
                        backgroundColor: billingPeriod === 'monthly' ? 'black' : 'white',
                        color: billingPeriod === 'monthly' ? 'white' : 'black',
                    }}
                            onClick={handleMonthlyToggle}>Monthly</button>
                    <button style={{
                        width:70,
                        height:29,
                        fontSize:12,
                        borderTopRightRadius:15,
                        borderBottomRightRadius:15,
                        backgroundColor: billingPeriod === 'monthly' ? 'white' : 'black',
                        color: billingPeriod === 'monthly' ? 'black' : 'white',
                    }} onClick={handleYearlyToggle}>Yearly</button>
                </div>
                <div style={{display:"flex", flexDirection:"row", marginTop:45, justifyContent:"center"}}>
                    <StratFlowBasic priceBasic={priceBasic} />
                    <StratFlowPro pricePro={pricePro} />
                    <StratFlowEnterprise/>
                </div>

            </div>

    );
};

export default PlansOptions;
