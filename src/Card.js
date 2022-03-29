

const Card = (props) => {
    return (
        <button className="cardBtn grow" data-url={props.url} data-title={props.title} data-img={props.image} data-tools={props.tools}
        data-cat={props.category} onClick={props.expand} >
            <div style={{backgroundImage: `url(${props.image})`}} className="card">
                <div>
                    <h6>{props.title}</h6>
                    <p>{props.tools}</p>
                </div>
            </div>
        </button>
    )
}