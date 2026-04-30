import {motion} from "framer-motion"

import IconTitle from "../components/title/IconTitle";
import ExperieceCard from "../features/experiences/experienceCard";

import { MdWorkHistory } from "react-icons/md";

export default function ExperiencesSection(){

    const experiences = [
        {
            title : "Desenvolvedor Full stack",
            content : "Trabalhei em uma aplicação web construida com o framework django realizando implementação de funcionalidades e testes junto a manutenção no sistema",
            location : "NADIC",
            skills : ["python","django","postgres","html","tailwind","docker","selenium",]
        },
    ]

    return (
        <section className="w-[72%] m-auto h-fit mb-50">
            <IconTitle icon={<MdWorkHistory/>} p="Minhas Experiencias em Trabalho" id="experiences">
                Experiencias
            </IconTitle>
            <div className="m-10 flex-col relative h-fit gap-5">
                <motion.div 
                    initial={{height : 0}}
                    whileInView={{height : "100%"}}
                    transition={{duration : 1 , delay : 0}}
                    viewport={{once : true}}
                    className="w-9/10 z-1 left-4 h-full border-l border-light-green absolute top-0"></motion.div>
                {experiences.map((element , index)=>(
                        <ExperieceCard {...element} index={index} />
                ))}
            </div>
        </section>
    )
}