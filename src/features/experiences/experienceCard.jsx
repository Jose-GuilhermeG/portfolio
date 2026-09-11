import { motion } from "framer-motion";
import { BiCode } from "react-icons/bi";
import ProjectSkill from "../projects/projectSkills";
import { GrLocation } from "react-icons/gr";

export default function ExperieceCard({ title, location, content, skills = [], index }) {


    return (
        <div className="text-white h-auto relative flex items-center w-full ">
            <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (0.3 * index) - 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 sm:gap-4 w-full experience-card"
            >
                <div className="p-2 mt-1 w-fit z-10 h-fit  rounded-[5px] shrink-0 experience-icon">
                    <BiCode className="text-2xl sm:text-3xl" />
                </div>
                
                <div className="flex flex-col flex-1 w-full">
                    <h1 className="text-xl sm:text-2xl font-black font-serif break-words text-foreground">
                        {title} 
                    </h1>
                    
                    <span className="flex items-center gap-2 text-sm sm:text-base font-light h-fit my-1 text-gray-300">
                        <GrLocation className="shrink-0" />
                        <span className="break-words">{location}</span>
                    </span>
                    
                    <p className="w-full md:w-5/6 lg:w-4/5 text-base sm:text-lg py-2 text-foreground">
                        {content}
                    </p>
                    
                    <div className="flex w-full flex-wrap gap-2 mt-2 max-sm:hidden">
                        {skills.map((element, i) => (
                            <ProjectSkill key={i} element={element} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}