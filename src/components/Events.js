// function displayDiv(){
//     document.getElementsByClassName("hack").style.display = "none";
//     document.getElementsByClassName("hackdays").style.display = "none";
//     document.getElementsByClassName("days").style.display = "none";
// }
function Events() {
    // var hack=document.getElementById("hack")
    // var hackdays=document.getElementById("hackdays")
    // var days=document.getElementById("days")
    // hack.addEventListener("click",()=>{
    //     // displayDiv();
    //     hack.classList.add("active-div")
    // });
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
