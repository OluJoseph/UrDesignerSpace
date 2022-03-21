

var Card = function Card(props) {
    return props.url ? React.createElement(
        "a",
        { href: props.url, target: "_blank" },
        React.createElement(
            "div",
            { style: { backgroundImage: "url(" + props.image + ")" }, className: "card grow" },
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
    ) : React.createElement(
        "div",
        { style: { backgroundImage: "url(" + props.image + ")" }, className: "card grow" },
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
    );
};