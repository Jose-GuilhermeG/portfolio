import { BiMenu } from "react-icons/bi";
import TextLink from "../links/TextLink";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../providers/ThemaProvider";
import { ThemeContext } from "../../contexts/ThemaContext";

interface LinkHeader{
    text : string;
    link : string;
}

interface SimpleHeaderProps{
    links_list : Array<LinkHeader>
}

function SimpleHeader({links_list} : SimpleHeaderProps) {

    const [showMenu , setShowMenu] = useState<Boolean>(false);
    const {theme , toggleTheme} = useContext(ThemeContext);

    return (
        <header className="w-full h-[10vh] flex justify-around max-xl:flex-row-reverse items-center p-5 max-xl:justify-between">
            <nav className="w-4/5 h-full flex justify-between items-center max-xl:hidden">
            {links_list.map((element,index)=>(
                <TextLink key={index} text={element.text} link={element.link} />
            ))}
            </nav>
            <button className="cursor-pointer mx-[10%] hidden max-xl:block" onClick={()=>setShowMenu(prev=>!prev)}>
                <MdMenu className="text-foreground text-[1.5rem]"/>
            </button>
            <motion.nav
            initial={{y:-10 ,}}
            whileInView={{y : 0 }}
            className={`${showMenu ? "flex" : "hidden"} bg-light-green absolute w-50 rounded-base [&_li]:text-white! min-h-[5vh] top-[10vh] z-100 p-3 right-4 flex-col gap-3`}>
                {links_list.map((element,index)=>(
                    <TextLink key={index} text={element.text} link={element.link} />
                ))}
            </motion.nav>
            <button onClick={toggleTheme} className="cursor-pointer text-[2rem] max-xl:mx-[10vw]">
                {theme == "light" ? <MdDarkMode/> : <MdLightMode/>}
            </button>
        </header>
    )
}

export default SimpleHeader;