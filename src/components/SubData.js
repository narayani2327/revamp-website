import DataImg from "./DataImg";
import DataText from "./DataText";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function SubData(props) {
    gsap.registerPlugin(ScrollTrigger);
    let div=useRef(null)
    useEffect(()=>{
        gsap.to(div,{
            x:-1100,
            ease: "power2",
            duration:3,
            opacity:1,
            scrollTrigger:{
                trigger:div,
                toggleActions:"play reverse play none",
                start:"top 80%",
                end:"top 10%"
            }
        })
    },[])
    return (
        <div className="data" ref={(el=>div=el)}>
            <DataText number={props.number} datainfo={props.datainfo}/>
            <DataImg/>
        </div>
    );
}

export default SubData;