import { BiMenu } from "react-icons/bi";
import TextLink from "../links/TextLink";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

interface LinkHeader{
    text : string;
    link : string;
}

interface SimpleHeaderProps{
    links_list : Array<LinkHeader>
}

function SimpleHeader({links_list} : SimpleHeaderProps) {

    const [showMenu , setShowMenu] = useState<Boolean>(false);

    return (
        <header className="w-full h-[10vh] flex justify-end items-center">
            <nav className="w-4/5 m-auto h-full flex justify-between items-center max-xl:hidden">
            {links_list.map((element,index)=>(
                <TextLink key={index} text={element.text} link={element.link} />
            ))}
            </nav>
            <button className="cursor-pointer mx-[10%] hidden max-xl:block" onClick={()=>setShowMenu(prev=>!prev)}>
                <MdMenu className="text-white text-[1.5rem]"/>
            </button>
            <motion.nav
            initial={{y:-10 ,}}
            whileInView={{y : 0 }}
            className={`${showMenu ? "flex" : "hidden"} bg-light-green absolute w-50 rounded-base min-h-[5vh] top-[10vh] z-100 p-3 right-4 flex-col gap-3`}>
                {links_list.map((element,index)=>(
                    <TextLink key={index} text={element.text} link={element.link} />
                ))}
            </motion.nav>
        </header>
    )
}

export default SimpleHeader;