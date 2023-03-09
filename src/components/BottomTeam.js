function BottomTeam(props) {
    return (
        <div className="bottom-team">
            <div>
                <img src={props.image} className="team-img"></img>
                <p>{props.text}</p>
            </div>
            <img src={props.arrow} className="arrow"></img>
        </div>
    );
}

export default BottomTeam;
