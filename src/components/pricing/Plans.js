import React from 'react';
import {Container} from "react-bootstrap";
import PlansOptions from "../../components/pricing/PlansOptions"
import FAQSection from "../../components/pricing/FAQSection";


const Plans = () => {



    return (
        <Container>

            <div style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                textAlign:"center",
                marginTop:30}}>

                <h4>Pricing and Plans</h4>
                <p>Whether you need simple or complex workflows, StratFlow offers
                    secure and reliable automation as you scale.</p>

            </div>
            <PlansOptions/>

            <h4 style={{
                textAlign:"center",
                backgroundColor:"#fff",
                color:"#1a1a1a",
                paddingTop:65,}}>Frequently Asked Questions</h4>

            <FAQSection />




        </Container>
    );


}


export default Plans;


