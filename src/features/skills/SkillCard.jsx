import { motion } from "framer-motion"

function SkillCard({children}){
    const BASE_URL = import.meta.env.BASE_URL

    return (
        <motion.div 
            className="w-[330px] h-[140px] max-lg:w-[280px] max-md:w-[200px] max-sm:w-[280px] bg-white rounded-2xl flex justify-center items-center hover:bg-light-green transition-colors [&_img]:w-16 cursor-pointer group max-md:[&_img]:w-14 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 , ease : 'easeInOut'}}
            viewport={{ once: false }} 
        >
            <div className="[&_svg]:w-16 [&_svg]:h-16 text-light-green group-hover:text-white block relative">
                {children}
            </div>
        </motion.div>
    )
}

export default SkillCard