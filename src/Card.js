

const Card = (props) => {
    return (
        <a href={props.url}>
            <div style={{backgroundImage: `url(${props.image})`}} className="card grow">
                <div href={props.url}>
                    <h6>{props.title}</h6>
                    <p>{props.tools}</p>
                </div>
            </div>
        </a>
    )
}