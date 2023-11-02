import React, {useRef, useState} from 'react';
import "../../assets/hero.css";
import Link from 'next/link';
import Image from 'next/image';
import demoImage from '../../../public/demopeople.png'
const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };


    return (
        <div style={{ height: '500px', paddingLeft:"16vw", paddingRight:"16vw", display:"flex", justifyContent:"center", paddingTop:80, backgroundColor:"#fff"}}>
            <div className={"left-side"}>
                <div>
                    <p style={{color:"#06ad85"}}>DRAG AND DROP</p>
                    <p style={{fontSize:36, lineHeight:"36px", width:"max-content", color:'#000'}}>AUTOMATED TIKTOK ADS</p>
                    <p style={{fontSize:70, lineHeight:"70px", fontWeight:600, width:"max-content", color:'#000'}}>WORK FOR YOU</p>
                    <p style={{marginLeft:6, fontSize:14, color:'#000'}}>Milk your ads for all theyre worth, scale, never overspend and reach your results  46% faster.</p>
                </div>
                <div className={"hero-buttons"}>
                    <Link href={"/signup"}>
                    <button className={"create-flow-button"}>Create Your Flow</button>
                    </Link>



                    <Link href={"/signup"}>
                        <button className={"demo-button"}>
                            <Image
                            src={demoImage}
                            height={31}
                            width={50}
                            style={{marginLeft:-4, marginRight:7}}
                            alt={"demo image"}
                        ></Image>
                            Book a Demo</button>
                    </Link>

                </div>
            </div>

            <div className="right-side video-container">
                <video
                    ref={videoRef}
                    controls
                    width="642"
                    controlsList="nodownload noplaybackrate"
                    data-testid="video"
                    disablePictureInPicture
                    disableRemotePlayback
                    poster="/Thumbnail.jpg"
                    preload="metadata"
                    src="/StratFlowVideo.mp4"
                    title="YOUR_VIDEO_TITLE_HERE"
                    className="video-player"
                >
                </video>
                {!isPlaying && (
                    <button className="video-play-button" onClick={playVideo}>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 15.5L15 12L9.5 8.5V15.5Z" fill="white"/>
                        </svg>
                    </button>
                )}
            </div>


        </div>
    );
};

export default Hero;
