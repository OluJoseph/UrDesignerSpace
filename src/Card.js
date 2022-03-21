

const Card = (props) => {
    return props.url ? (
        <a href={props.url} target="_blank">
            <div style={{backgroundImage: `url(${props.image})`}} className="card grow">
                <div>
                    <h6>{props.title}</h6>
                    <p>{props.tools}</p>
                </div>
            </div>
        </a>
    ) : (
        <a>
            <div style={{backgroundImage: `url(${props.image})`}} className="card grow">
                <div>
                    <h6>{props.title}</h6>
                    <p>{props.tools}</p>
                </div>
            </div>
        </a>
    )}