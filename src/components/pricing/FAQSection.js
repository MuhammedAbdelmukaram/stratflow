import React from 'react';
import "../../assets/plans.css";
const FAQItem = ({ question, answer }) => {
    return (
        <div className={"faq-question-container"}>
            <h6 className={"faq-heading"}>{question}</h6>
            <p className={"faq-text"}>{answer}</p>
        </div>
    );
};

const FAQSection = () => {
    const faqData = [
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        {
            question: "What forms of payment do you accept",
            answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay.",
        },
        // Add more FAQ items as needed
    ];

    return (
        <div className={"faq-all-questions"}>
            <div className={"faq-left-column"}>
                {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
            <div className={"faq-right-column"}>
                {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
