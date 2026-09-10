import { BiCode } from "react-icons/bi"
import { motion } from "framer-motion" // eslint-disable-line
import ProjectSkill from "./projectSkills"
import { ProjectCardProtocol } from "../../types/Projecttypes";

interface ProjectCardProps extends ProjectCardProtocol{
    className? : string;
}

export default function ProjectCard({title , description = "" , skills = [] , icon = <BiCode/> , isFinalize = true , className = "" , repositoryLink } : ProjectCardProps){

    const goToRepository = ()=> {if(repositoryLink) window.open(repositoryLink,"_blank")}

    return (
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 , ease : 'easeInOut'}}
            viewport={{ once: false }} 
            onClick={goToRepository}
            className={`${className} ${repositoryLink && "cursor-pointer"} flex flex-col justify-start p-5 aspect-square min-w-sm w-3/10 max-xl:w-9/10 rounded-medium text-white bg-gray-900`}>
                <div className="flex items-center gap-4 justify-between">
                    <div className="w-fit p-1 text-3xl border my-2 rounded-base">
                        {icon}
                    </div>
                    {isFinalize && 
                        <div className="bg-light-green font-medium p-1 rounded-medium capitalize w-30 text-center">
                            Finalizado
                        </div>
                    }
                </div>
                <h1 className="text-4xl font-black font-serif py-2 capitalize">
                    {title}
                </h1>
                <p className="py-5 font-light max-xl:text-[1.2rem]">
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