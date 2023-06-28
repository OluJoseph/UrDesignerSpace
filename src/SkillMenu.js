

const SkillMenu = ({displaying}) => {
    return (
        <div className="SkillMenuList">
            <div onClick={displaying}>Web</div>
            <div onClick={displaying}>UI/UX</div>
            <div onClick={displaying}>Graphic Design</div>
        </div>
    )
}

