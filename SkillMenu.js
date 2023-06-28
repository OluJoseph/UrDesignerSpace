

var SkillMenu = function SkillMenu(_ref) {
    var displaying = _ref.displaying;

    return React.createElement(
        "div",
        { className: "SkillMenuList" },
        React.createElement(
            "div",
            { onClick: displaying },
            "Web"
        ),
        React.createElement(
            "div",
            { onClick: displaying },
            "UI/UX"
        ),
        React.createElement(
            "div",
            { onClick: displaying },
            "Graphic Design"
        )
    );
};