import TextLink from "../links/TextLink";

function SimpleHeader({links_list}) {
    return (
        <header className="w-full h-[10vh]">
            <nav className="w-4/5 m-auto h-full flex justify-between items-center">
            {links_list.map((element,index)=>(
                <TextLink key={index} text={element.text} link={element.link} />
            ))}
            </nav>
        </header>
    )
}

export default SimpleHeader;