import { motion } from "framer-motion"

import { BiCode } from "react-icons/bi"
import ProjectSkill from "../projects/projectSkills"
import { GrLocation } from "react-icons/gr"

export default function ExperieceCard({title , location , content , skills = [] , index}){
    return (
        <div className="text-white h-40 relative flex items-center">
            <motion.div 
            initial={{opacity : 0 , y : -10}}
            whileInView={{opacity : 1, y : 0}}
            transition={{duration : 0.5 , delay : (0.3 * index) - 0.1}}
            viewport={{once : true}}
            className="flex gap-2 h-20 my-2">
                <div className="p-1 mt-1 w-fit z-10 h-fit bg-green-700 rounded-[5px] border-light-green border">
                    <BiCode className="text-2xl"/>
                </div>
                <div className="h-full">
                    <h1 className="text-2xl font-black font-serif">
                        {title} 
                    </h1>
                    <span className="flex items-center gap-2 text-[20px] font-light">
                        <GrLocation/>
                        {location}
                    </span>
                    <p className="w-4/5 text-1xl p-1">
                        {content}
                    </p>
                    <div className="flex w-full flex-wrap px-1">
                        {skills.map(element=><ProjectSkill element={element}/>)}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}