

const Cards = ({cardsToDisplay}) => {
    return (
        <div className="cards container">
            {
                cardsToDisplay.map(card => {
                    return <Card key={card.id} category={card.category} image={card.img} title={card.title} tools={card.tools} url={card.url}/>
                })
            }
        </div>
    )
}