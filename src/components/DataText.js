function DataText(props) {
    return (
        <div className="data-text">
            <p className="number">{props.number}</p>        
            <p className="data-info">{props.datainfo}</p>        
        </div>
    );
}

export default DataText;