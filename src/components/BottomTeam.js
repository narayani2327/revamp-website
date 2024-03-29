import { gsap } from 'gsap';
import React, { useEffect, useRef } from "react";

function BottomTeam(props) {
    let text=useRef(null)
    let image=useRef(null)
    let arrow=useRef(null)
    let mainDiv=useRef(null)
    const handleAnimate=()=>{
        gsap.to(text,{
            y:-250,
            duration:1
        })
        gsap.to(image,{
            y:280,
            duration:1,
            opacity:1
        })
        gsap.to(arrow,{
            y:-150,
            duration:1,
            opacity:1
        })
    }
    const handleReverse=()=>{
        gsap.to(text,{
            y:0,
            duration:1
        })
        gsap.to(image,{
            y:0,
            duration:1,
            opacity:0
        })
        gsap.to(arrow,{
            y:-0,
            duration:1,
            opacity:0
        })
    }
    useEffect(()=>{
        // gsap.from(circle,{
        //     y:-700,
        //     duration:5
        // })
    },[])
    
    return (
        <div className="bottom-team" ref={(el=>mainDiv=el)} onMouseEnter={handleAnimate} onMouseLeave={handleReverse} >
            <div>
                <img ref={(el=>image=el)} src={props.image} className="team-img"></img>
                <p ref={(el=>text=el)}>{props.text}</p>
            </div>
            <a href='#'><img ref={(el=>arrow=el)} src={props.arrow} className="arrow"></img></a>
            {/* <a href='#'>
                <object type='image/svg+xml' ref={(el=>arrow=el)} data={props.arrow}></object>
            </a> */}
        </div>
    );
}

export default BottomTeam;
