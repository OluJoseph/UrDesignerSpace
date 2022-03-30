

const SkillMenu = ({displaying}) => {
    return (
        <div className="SkillMenuList">
            <div onClick={displaying}>Web Design</div>
            <div onClick={displaying}>UI/UX Design</div>
            <div onClick={displaying}>Graphic Design</div>
        </div>
    )
}

