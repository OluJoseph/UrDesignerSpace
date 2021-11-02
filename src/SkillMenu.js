

const SkillMenu = ({displaying}) => {
    return (
        <ul className="SkillMenuList">
            <li onClick={displaying}><h6>Web Design</h6></li>
            <li onClick={displaying}><h6>UI/UX Design</h6></li>
            <li onClick={displaying}><h6>Graphic Design</h6></li>
        </ul>
    )
}

