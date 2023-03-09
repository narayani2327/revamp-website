import BottomTeam from "./BottomTeam";
import TopTeam from "./TopTeam";
import tech from "../assets/tech_1.svg";
import growth from "../assets/growth.svg";
import social from "../assets/social.svg";
import community from "../assets/community.svg";
import arrow from "../assets/arrow_2.svg";
function Team() {
    return (
        <div className="team">
            <BottomTeam image={tech} text="Tech" arrow={arrow}/>
            <TopTeam  image={social} text="Social Media" arrow={arrow}/>
            <BottomTeam  image={growth} text="Growth" arrow={arrow}/>
            <TopTeam image={community} text="Community" arrow={arrow}/>
        </div>
    );
}

export default Team;
