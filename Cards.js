var Cards = function Cards(_ref) {
  var cardsToDisplay = _ref.cardsToDisplay;

  return React.createElement(
    "div",
    { className: "cards container-fluid", style: { height: "600px" } },
    cardsToDisplay.map(function (card, index) {
      return React.createElement(Card, {
        key: index,
        category: card.category,
        image: card.img,
        title: card.title,
        tools: card.tools,
        url: card.url
      });
    })
  );
};