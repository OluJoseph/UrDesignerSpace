

const SkillMenu = ({displaying}) => {
    return (
        <ul className="SkillMenuList">
            <li onClick={displaying}><span>Web Design</span></li>
            <li onClick={displaying}><span>UI/UX Design</span></li>
            <li onClick={displaying}><span>Graphic Design</span></li>
        </ul>
    )
}

