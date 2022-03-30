

var SkillMenu = function SkillMenu(_ref) {
    var displaying = _ref.displaying;

    return React.createElement(
        "div",
        { className: "SkillMenuList" },
        React.createElement(
            "div",
            { onClick: displaying },
            "Web Design"
        ),
        React.createElement(
            "div",
            { onClick: displaying },
            "UI/UX Design"
        ),
        React.createElement(
            "div",
            { onClick: displaying },
            "Graphic Design"
        )
    );
};