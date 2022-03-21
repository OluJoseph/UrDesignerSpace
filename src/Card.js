

const Card = (props) => {
    if (props.url !== '') {
        return (
            <a href={props.url} target="_blank">
                <div style={{backgroundImage: `url(${props.image})`}} className="card grow">
                    <div>
                        <h6>{props.title}</h6>
                        <p>{props.tools}</p>
                    </div>
                </div>
            </a>
        )
    }else{
        return (
            <div style={{backgroundImage: `url(${props.image})`}} className="card grow">
                <div>
                    <h6>{props.title}</h6>
                    <p>{props.tools}</p>
                </div>
            </div>
        )
    }
}