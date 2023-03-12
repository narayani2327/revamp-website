import Data from "./Data";
import React, { useEffect } from "react";
import { gsap, TimelineMax } from 'gsap';
function About() {
    useEffect(()=>{
        var tl = new TimelineMax({
            paused:true
        });
        tl.fromTo(".title", 5, {
            width: "0",
        }, {
            width: "9.50em",
            ease:"none"
        }, 0);
        tl.fromTo(".title", 0.5, {
            "border-right-color": "rgba(255,255,255,0.75)"
        }, {
            "border-right-color": "rgba(255,255,255,0)",
            repeat: -1,
            ease:"none"
        }, 0);
        tl.play();
    },[])
    return (
        <div className="about">
            <p className="title">WHY SELLULAR?</p>    
            <p className="about-us">ABOUT US</p>
            <Data/>
        </div>
    );
}

export default About;