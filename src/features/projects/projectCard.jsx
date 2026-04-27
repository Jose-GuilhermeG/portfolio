import { BiCode } from "react-icons/bi"
import { motion } from "framer-motion" // eslint-disable-line
import ProjectSkill from "./projectSkills"

export default function ProjectCard({title , description = "" , skills = [] , icon = <BiCode/>  }){
    return (
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 , ease : 'easeInOut'}}
            viewport={{ once: false }} 
            className="flex flex-col justify-start p-5 min-h-[35vh] min-w-sm w-3/10 rounded-[10px] text-white bg-gray-900">
                <div className="w-fit p-1 text-3xl border my-2 rounded-[5px]">
                    {icon}
                </div>
                <h1 className="text-4xl font-black font-serif py-2 capitalize">
                    {title}
                </h1>
                <p className="py-5 font-light">
                    {description}
                </p>
                <div className="flex flex-wrap justify-start items-center my-2 font-light text-gray-200">
                    {skills.map(element=>(
                        <ProjectSkill element={element} />
                    ))}
                </div>
            </motion.div>
    )
}