var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
    _inherits(Projects, _React$Component);

    function Projects() {
        _classCallCheck(this, Projects);

        var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this));

        _this.changeView = function (event) {

            _this.setState({ view: event.target.innerHTML.toLowerCase() });
        };

        _this.state = {
            view: 'web design',
            proj: projectList
        };

        return _this;
    }

    _createClass(Projects, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var filteredprojects = this.state.proj.filter(function (item) {
                return item.category.toLowerCase() == _this2.state.view;
            });
            return React.createElement(
                "div",
                null,
                React.createElement(SkillMenu, { displaying: this.changeView }),
                React.createElement(Cards, { cardsToDisplay: filteredprojects })
            );
        }
    }]);

    return Projects;
}(React.Component);

ReactDOM.render(React.createElement(Projects, null), document.getElementById("projects"));