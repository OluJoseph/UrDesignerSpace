
class Projects extends React.Component {
    constructor () {
        super();
        this.state = {
            view: 'web design',
            proj: []
        }
    }

    //FUNCTION FILTERS PROJECTS ACCORDING TO THE 3 CATEGORIES
    changeView = (event) => {
        this.setState({view: event.target.innerHTML.toLowerCase()})
    }


    componentDidMount () {
        this.setState({proj: projectList})
    }

    render () {
        const filteredprojects = this.state.proj.filter(item => {
           return (item.category.toLowerCase() == this.state.view)
        })
        return (
            <div className="portfolioSect">
                <SkillMenu displaying = {this.changeView}/>
                <Cards cardsToDisplay = {filteredprojects}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Projects />, document.getElementById("projects")
)


