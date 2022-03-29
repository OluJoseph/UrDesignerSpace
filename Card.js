

var Card = function Card(props) {
    return React.createElement(
        "button",
        { className: "cardBtn grow", "data-url": props.url, "data-title": props.title, "data-img": props.image, "data-tools": props.tools,
            "data-cat": props.category, onClick: props.expand },
        React.createElement(
            "div",
            { style: { backgroundImage: "url(" + props.image + ")" }, className: "card" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h6",
                    null,
                    props.title
                ),
                React.createElement(
                    "p",
                    null,
                    props.tools
                )
            )
        )
    );
};