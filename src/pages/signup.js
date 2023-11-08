import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import ImageBanner from '../../public/TriggerAction.png'
import ImageBanner2 from '../../public/StrategyBanner.jpg'
import Header from "@/sections/common/header";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import {Catamaran} from "next/dist/compiled/@next/font/dist/google";
import AnnouncementBar from "@/components/common/announcementBar";
const Signup = () => {

    const images = [ImageBanner, ImageBanner2]; // Add your images here
    const [currentIndex, setCurrentIndex] = useState(0);
    const progressBarRef = useRef(null);

    const [email, setEmail] = useState('');
    const [isEmailValid, setEmailValid] = useState(false);

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    useEffect(() => {
        setEmailValid(emailRegex.test(email));
    }, [email]);

    useEffect(() => {
        const updateProgressBar = () => {
            if (progressBarRef.current) {
                progressBarRef.current.style.transition = 'none';
                progressBarRef.current.style.width = '0%';
                requestAnimationFrame(() => {
                    progressBarRef.current.style.transition = 'width 5s linear';
                    progressBarRef.current.style.width = '100%';
                });
            }
        };

        updateProgressBar();  // Initialize for the first image

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            updateProgressBar();  // Update for each subsequent image
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);  // Only run once at component mount

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isEmailValid) {
            alert('Please enter a valid email address.');
            return;
        }

        // Get the values from the form inputs
        const name = event.target.name.value;
        const email = event.target.email.value;

        try {
            // Add a new document with a generated id to the "leads" collection
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                // You can add more fields here if needed
            });

            console.log("Document written with ID: ", docRef.id);
            // Here you can clear the form or show a success message
        } catch (e) {
            console.error("Error adding document: ", e);
            // Here you can handle the error, show an error message, etc.
        }
    };


    return (
        <div>
            <AnnouncementBar/>

            <div style={{ display: 'flex', height: '100vh', backgroundColor:"#fff"}}>

                {/* Left Half */}
                <div style={{ flex: 1, backgroundColor: '#06ad85', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "-9px 0px 54px 12px rgba(0, 0, 0, 0.25)" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <div style={{ width: 500, height: 500, position: 'relative', marginTop:"-100px", }}>
                            <Image src={images[currentIndex]} alt="Descriptive Alt Text" layout="fill" objectFit="contain" />
                        </div>
                        <div style={{ width: 500, height: 5, backgroundColor: 'rgba(255, 255, 255, 0.5)', marginTop: 10 }}>
                            <div ref={progressBarRef} style={{ width: '0%', height: '100%', backgroundColor: '#fff' }}></div>
                        </div>

                        <div>
                            <p style={{ color: "#fff", fontSize: "small", textAlign: "right", marginTop: '1rem', width:500 }}>
                                Stratflow.io has been an absolute game-changer for our e-commerce store.
                                It’s like having a team of experts working behind the scenes
                                to deliver top-notch, high-quality media buying experience
                                that truly captivates us.
                            </p>
                        </div>


                    </div>
                </div>




                {/* Right Half */}
                <div style={{ flex: 1, backgroundColor: 'white', padding: '2rem', color:"#1a1a1a" }}>
                    <div style={{paddingTop:110, paddingLeft:52}}>
                        <h2 style={{ fontSize: 38, fontFamily: 'Catamaran, sans-serif' }}>
                            Get your
                            <span style={{ fontSize: 38, backgroundColor: "#1a1a1a", color: "#fff", paddingLeft: 12, marginLeft:6, marginRight:6, paddingRight: 12, paddingTop: 2, fontFamily: 'Catamaran, sans-serif' }}>
                    EARLY ACCESS
                     </span>
                            now
                        </h2>
                        <div style={{width:560, fontSize:15, marginTop:20, textAlign:"justify"}}>
                            <p>Youre not just getting a front-row seat to our platforms launch – youll soon receive an email granting you immediate access. And heres the best part: as an early adopter, youll automatically enjoy all our Pro features, absolutely free. </p>
                        </div>
                        <div style={{width:580, height:2, backgroundColor:"#eaeaea", marginTop:10}}></div>
                    </div>



                    <form  onSubmit={handleSubmit} style={{ paddingLeft: 58, paddingTop: 60 }}>
                        <div style={{ marginBottom: '1.5rem', maxWidth: 200 }}>
                            <label style={{ display: "flex", flexDirection: "column", color: 'rgba(26, 26, 26, 0.7)', fontSize:13 }}>
                                Full Name:
                                <input
                                    style={{
                                        marginTop: 8,
                                        color: "#1a1a1a",
                                        borderRadius: 6,
                                        flexGrow: 1,
                                        height: 38,
                                        border: '1px solid #A9A9A9',
                                        outline: 'none',
                                        background: '#fff',
                                        padding: '12px 16px',
                                        width: 386,
                                        fontSize: 14,
                                        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                        transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
                                    }}
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                />
                            </label>
                        </div>
                        <div style={{ marginBottom: '1rem', maxWidth: 200 }}>
                            <label style={{ display: "flex", flexDirection: "column", color: 'rgba(26, 26, 26, 0.7)', fontSize: 13 }}>
                                Email:
                                <input
                                    style={{
                                        marginTop: 8,
                                        borderRadius: 6,
                                        color:"#1a1a1a",
                                        flexGrow: 1,
                                        height: 38,
                                        border: '1px solid #A9A9A9',
                                        outline: 'none',
                                        background: '#fff',
                                        padding: '12px 16px',
                                        width: 386,
                                        fontSize: 14,
                                        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                        transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                                        zIndex:1
                                    }}
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={isEmailValid ? 'valid' : 'invalid'}
                                />
                            </label>
                            {!isEmailValid && email && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
                            <div style={{width:386, display:"flex",alignItems:"center", justifyContent:"center"}}>
                                <div style={{
                                    position: 'absolute',
                                    justifyContent:"center",
                                    marginTop:140,
                                    width: '4px',
                                    height: '150px',
                                    borderLeft: '4px dashed black',
                                    zIndex: 0
                                }}></div>
                            </div>

                        </div>
                        <button className={"signup-CTA-Button"} type="submit">Get Early Access</button>

                        <style jsx>{`
        input:hover {
            border-color: #888;
        }

        input:focus {
            border-color: #007BFF;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
        }

        input::placeholder {
            color: #aaa;
        }
    `}</style>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Signup;
