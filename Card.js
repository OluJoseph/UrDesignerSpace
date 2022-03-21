

var Card = function Card(props) {
    if (props.url !== '') {
        return React.createElement(
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
        );
    } else {
        return React.createElement(
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
    }
};