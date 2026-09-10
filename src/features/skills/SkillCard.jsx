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
            className="w-full max-w-[330px]  py-5 px-3 bg-white rounded-2xl grid grid-rows-[75%_25%] hover:bg-light-green transition-colors [&_img]:w-16 cursor-pointer group max-md:[&_img]:w-14"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 , ease : 'easeInOut'}}
            viewport={{ once: false }} 
        >
            <div className="w-1/4 aspect-square [&_svg]:w-full [&_svg]:h-full text-light-green group-hover:text-white block relative m-auto my-2">
                {children}
            </div>

            <div className="relative h-fit min-h-3 max-h-3/10">
                <span className="block w-full text-right top-0 text-light-green group-hover:text-white font-medium font-serif max-xl:text-[0.7rem]">
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