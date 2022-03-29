

const Cards = ({cardsToDisplay, openCard}) => {
    return (
        <div className="cards container-fluid" style={{height: '600px' }}>
            {
                cardsToDisplay.map(card => {
                    return <Card key={card.id} category={card.category} image={card.img} title={card.title} tools={card.tools} url={card.url} expand={openCard}/>
                })
            }
        </div>
    )
}