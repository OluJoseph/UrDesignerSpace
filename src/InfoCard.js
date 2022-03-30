const addLink = (props) => {
    //add link to project if url exists
    return props.url ? 
    (
    <div className="shade" id="Shade">
        <button id="clear" onClick={()=>{
            props.setClick(false);
            document.body.style.overflowY = "visible";
            }}>
            <span className="material-icons">clear</span>
        </button>
        <div className="infoCard">
            <img src={props.image} alt={props.title}></img>
            <div>
                <h5>{props.title}    <span>({props.category})</span></h5>
                <div>
                    <p>{props.tools}</p>
                    <a href={props.url} target="_blank">View project</a>
                </div>
            </div>
        </div>
        
    </div>
) : (
    <div className="shade" id="Shade">
        <button id="clear" onClick={()=>{
            props.setClick(false);
            document.body.style.overflowY = "visible";
            }}>
            <span className="material-icons">clear</span>
        </button>
        <div className="infoCard">
            <img src={props.image} alt={props.title}></img>
            <div>
                <h5>{props.title}    <span>({props.category})</span></h5>
                <div>
                    <p>{props.tools}</p>
                </div>
            </div>
        </div>
        
    </div>
    )
}
const InfoCard = (props) => {
    return addLink(props)
}