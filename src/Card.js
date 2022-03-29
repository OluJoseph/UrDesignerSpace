

const Card = (props) => {

    const [isClicked, setIsClicked] = React.useState(false)

    return (
        <div>
            <button className="cardBtn grow" onClick={()=>setIsClicked(true)}>
                <div style={{backgroundImage: `url(${props.image})`}} className="card">
                    <div>
                        <h6>{props.title}</h6>
                        <p>{props.tools}</p>
                    </div>
                </div>
            </button>
            {isClicked && <InfoCard url={props.url} image={props.image} title={props.title}
             tools={props.tools} category={props.category} setClick={setIsClicked}/>}

        </div>
        
    )
}