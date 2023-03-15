import { gsap } from 'gsap';
import React, { useRef, useEffect } from "react";
function displayDiv(){
    document.querySelector(".hack").style.display = "none";
    document.querySelector(".hackdays").style.display = "none";
    document.querySelector(".days").style.display = "none";
}
function Events() {
    let hackv=useRef(null)
    let hackdaysv=useRef(null)
    let daysv=useRef(null)
    useEffect(()=>{
        var hack=document.getElementById("hack")
        var hackdays=document.getElementById("hackdays")
        var days=document.getElementById("days")
        hack.addEventListener("click",()=>{
            hack.classList.add("active")
            hackdays.classList.remove("active")
            days.classList.remove("active")
            displayDiv()
            document.querySelector(".hack").style.display = "block"
            gsap.to(hackv,{
                x:1200,
                duration:1
            })
        });
        hackdays.addEventListener("click",()=>{
            hackdays.classList.add("active")
            hack.classList.remove("active")
            days.classList.remove("active")
            displayDiv()
            document.querySelector(".hackdays").style.display = "block";
            gsap.to(hackv,{
                x:-1200,
                duration:1
            })
            gsap.to(daysv,{
                x:1200,
                duration:1
            })
        });
        days.addEventListener("click",()=>{
            days.classList.add("active")
            hackdays.classList.remove("active")
            hack.classList.remove("active")
            displayDiv()
            document.querySelector(".days").style.display = "block";
            gsap.to(daysv,{
                x:-1200,
                duration:1
            })
        });
    },[])
    return (
        <div className="event">
            <div className="events-nav">
                <ul>
                    <li id="hack">hack</li>
                    <li id="hackdays" className="active">HACKDAYS</li>
                    <li  id="days">days</li>
                </ul>
            </div>
            <div className="hack" ref={(el=>hackv=el)}>
                <p>HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desque repudiandae veritatis quia illum deserunt!</p>
                <a href="#">Know More</a>
            </div>
            <div className="hackdays active-div" ref={(el=>hackdaysv=el)}>
                <p>hackdays Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum orem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desdeserunt!</p>
                <a href="#">Know More</a>
            </div>
            <div className="days" ref={(el=>daysv=el)}>
                <p>Days Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desat distinctio veniam porro perferendis neque repudiandae veritatis quia illum deserunt!</p>
                <a href="#">Know More</a>
            </div>
        </div>
    );
}

export default Events;
