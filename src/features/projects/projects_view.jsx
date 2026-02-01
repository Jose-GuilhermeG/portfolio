import Banner from "../../components/banner/Banner"
import SimpleTitle from "../../components/title/SimpleTitle"
import { motion } from "framer-motion"

export default function ProjectsView({children , project_url , project_title , ...props}){
    const BASE_URL = import.meta.env.BASE_URL
    return (
        <div className="pb-10" {...props}>
            <div className="w-full bg-black py-10 pb-50">
                    <SimpleTitle content="Ultimo Projeto" id="projects"/>
                    <h1 className="text-3xl text-white capitalize font-light opacity-80 text-center font-inter">
                        {project_title}
                    </h1>
                </div>
            <motion.div
                initial={{opacity : 0 , y : 150}}
                transition={{duration : 0.3 , ease : 'easeInOut'}}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} 
            >
                <Banner image_url='images/last-project.png' style={{'top' : '-15vh'}}/>
            </motion.div>
            {children}
            <a href={project_url} target="_blank" className="cursor-pointer bg-black rounded-2xl relative text-white flex justify-center items-center text-2xl font-inter w-[15%] py-2 m-auto ">
            Ver Mais no
                <img src={BASE_URL + '/icons/github-icon.svg'} alt="" className="w-16 h-16 mx-5" />
            </a>
        </div>
    )
}