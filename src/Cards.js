const Cards = ({ cardsToDisplay }) => {
  return (
    <div className="cards container-fluid" style={{ height: "600px" }}>
      {cardsToDisplay.map((card, index) => {
        return (
          <Card
            key={index}
            category={card.category}
            image={card.img}
            title={card.title}
            tools={card.tools}
            url={card.url}
          />
        );
      })}
    </div>
  );
};
