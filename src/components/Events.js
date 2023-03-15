import React, { useEffect } from "react";
function displayDiv(){
    document.querySelector(".hack").style.display = "none";
    document.querySelector(".hackdays").style.display = "none";
    document.querySelector(".days").style.display = "none";
}
function Events() {
    useEffect(()=>{
        var hack=document.getElementById("hack")
        var hackdays=document.getElementById("hackdays")
        var days=document.getElementById("days")
        hack.addEventListener("click",()=>{
            hack.classList.add("active")
            hackdays.classList.remove("active")
            days.classList.remove("active")
            displayDiv()
            document.querySelector(".hack").style.display = "block";
        });
        hackdays.addEventListener("click",()=>{
            hackdays.classList.add("active")
            hack.classList.remove("active")
            days.classList.remove("active")
            displayDiv()
            document.querySelector(".hackdays").style.display = "block";
        });
        days.addEventListener("click",()=>{
            days.classList.add("active")
            hackdays.classList.remove("active")
            hack.classList.remove("active")
            displayDiv()
            document.querySelector(".days").style.display = "block";
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
            <div className="hack">
                <p>HAck Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desque repudiandae veritatis quia illum deserunt!</p>
                <a href="#">Know More</a>
            </div>
            <div className="hackdays active-div">
                <p>hackdays Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum orem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desdeserunt!</p>
                <a href="#">Know More</a>
            </div>
            <div className="days">
                <p>Days Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat distinctio veniam porro perferendis neque repudiandae veritatis quia illum desat distinctio veniam porro perferendis neque repudiandae veritatis quia illum deserunt!</p>
                <a href="#">Know More</a>
            </div>
        </div>
    );
}

export default Events;
