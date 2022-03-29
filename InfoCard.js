var addLink = function addLink(props) {
    //add link to project if url exists
    return props.url ? React.createElement(
        "div",
        { className: "shade", id: "Shade" },
        React.createElement(
            "button",
            { id: "clear", onClick: function onClick() {
                    return props.setClick(false);
                } },
            React.createElement(
                "span",
                { className: "material-icons" },
                "clear"
            )
        ),
        React.createElement(
            "div",
            { className: "infoCard" },
            React.createElement("img", { src: props.image, alt: props.title }),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h5",
                    null,
                    props.title,
                    "    ",
                    React.createElement(
                        "span",
                        null,
                        "(",
                        props.category,
                        ")"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        props.tools
                    ),
                    React.createElement(
                        "a",
                        { href: props.url, target: "_blank" },
                        "View project"
                    )
                )
            )
        )
    ) : React.createElement(
        "div",
        { className: "shade", id: "Shade" },
        React.createElement(
            "button",
            { id: "clear", onClick: function onClick() {
                    return props.setClick(false);
                } },
            React.createElement(
                "span",
                { className: "material-icons" },
                "clear"
            )
        ),
        React.createElement(
            "div",
            { className: "infoCard" },
            React.createElement("img", { src: props.image, alt: props.title }),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h5",
                    null,
                    props.title,
                    "    ",
                    React.createElement(
                        "span",
                        null,
                        "(",
                        props.category,
                        ")"
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        props.tools
                    )
                )
            )
        )
    );
};
var InfoCard = function InfoCard(props) {
    return addLink(props);
};