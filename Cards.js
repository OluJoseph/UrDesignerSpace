

var Cards = function Cards(_ref) {
    var cardsToDisplay = _ref.cardsToDisplay;

    return React.createElement(
        "div",
        { className: "cards container" },
        cardsToDisplay.map(function (card) {
            return React.createElement(Card, { key: card.id, category: card.category, image: card.img, title: card.title, tools: card.tools, url: card.url });
        })
    );
};