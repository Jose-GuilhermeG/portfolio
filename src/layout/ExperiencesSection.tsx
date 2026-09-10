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
        <section className="w-[72%] m-auto h-fit mb-50 max-sm:w-9/10">
            <IconTitle icon={<MdWorkHistory/>} p="Minhas Experiencias em Trabalho" id="experiences">
                Experiencias
            </IconTitle>
            <div className="m-10 flex-col relative h-fit">
                {experiences.map((element , index)=>(
                        <ExperieceCard {...element} index={index} />
                ))}
            </div>
        </section>
    )
}