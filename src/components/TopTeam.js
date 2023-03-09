function TopTeam(props) {
    return (
        <div className="top-team">
            <div>
                <img src={props.image} className="team-img"></img>
                <p>{props.text}</p>
            </div>
            <img src={props.arrow} className="arrow"></img>
        </div>
    );
}

export default TopTeam;
