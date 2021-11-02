

var SkillMenu = function SkillMenu(_ref) {
    var displaying = _ref.displaying;

    return React.createElement(
        "ul",
        { className: "SkillMenuList" },
        React.createElement(
            "li",
            { onClick: displaying },
            React.createElement(
                "h6",
                null,
                "Web Design"
            )
        ),
        React.createElement(
            "li",
            { onClick: displaying },
            React.createElement(
                "h6",
                null,
                "UI/UX Design"
            )
        ),
        React.createElement(
            "li",
            { onClick: displaying },
            React.createElement(
                "h6",
                null,
                "Graphic Design"
            )
        )
    );
};