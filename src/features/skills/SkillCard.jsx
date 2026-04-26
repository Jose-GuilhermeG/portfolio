import { motion } from "framer-motion" // eslint-disable-line

function SkillCard({children , level = 1}){

    const validLevel = Math.max(0, Math.min(100, level));
    const levelTag = ()=>{
        if(level < 50) return "iniciante";
        if(level < 80) return "intermediario";
        return "avançado"
    }

    return (
        <motion.div 
            className="w-[330px] h-[160px] max-lg:w-[280px] max-md:w-[200px] max-sm:w-[280px] p-3 bg-white rounded-2xl grid grid-rows-[75%_25%] hover:bg-light-green transition-colors [&_img]:w-16 cursor-pointer group max-md:[&_img]:w-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 , ease : 'easeInOut'}}
            viewport={{ once: false }} 
        >
            <div className="[&_svg]:w-16 [&_svg]:h-16 text-light-green group-hover:text-white block relative m-auto">
                {children}
            </div>

            <div className="relative h-fit min-h-3">
                <span className="block w-full text-right top-0 text-light-green group-hover:text-white font-medium font-serif">
                    {levelTag()}
                </span>
                <div className="w-full h-3 bg-amber border-2 rounded-2xl border-light-green group-hover:border-white">
                    <motion.div
                        className="bg-light-green group-hover:bg-white h-full transition-colors"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${validLevel}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3}}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default SkillCard