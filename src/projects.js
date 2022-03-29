
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

    //function to collapse expanded card
    collapse = (e) => {
        console.log(e.currentTarget)
    }

    //FUNCTION TO VIEW THE PROJECT INFORMATION AND ADD LINK TO BEHANCE
    openCard = (e) => {
        //GET THE CURRENT CARD BEING CLICKED
        let myTarget = e.currentTarget;
        let section = document.querySelector(".portfolioSect")
    
        //render the card
        ReactDOM.render(
            <InfoCard img={myTarget.dataset.img} title={myTarget.dataset.title} category={myTarget.dataset.cat}
             tools={myTarget.dataset.tools} url={myTarget.dataset.url}/>, document.getElementById("projects")
        )
        document.body.style.overflowY = "hidden"
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
                <Cards cardsToDisplay = {filteredprojects} openCard={this.openCard}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Projects />, document.getElementById("projects")
)


