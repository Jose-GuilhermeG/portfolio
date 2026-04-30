import SimpleTitle from "../components/title/SimpleTitle";
import SkillGalery from "../features/skills/SkillsGalery";

import { SiFastapi , SiPostgresql , SiPython , SiDjango, SiRabbitmq, SiApachekafka, SiPytest, SiJest, SiDocker, SiGithub } from "react-icons/si"
import { DiJava, DiMysql, DiRedis } from "react-icons/di"
import { BiLogoSpringBoot } from "react-icons/bi"
import { BsTypescript } from "react-icons/bs"
import {FaCode, FaJsSquare, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"

export default function SkillsSection(){

     const skill_list = [
            {icon : <SiDjango/> , level : 50},
            {icon : <SiFastapi/> , level : 50},
            {icon : <SiPostgresql/> , level : 50},
            {icon : <SiPython/> , level : 70},
            {icon : <BiLogoSpringBoot/> , level : 0},
            {icon : <DiJava/> , level : 20},
            {icon : <DiMysql/> , level : 70},
            {icon : <DiRedis/> , level : 50},
            {icon : <SiRabbitmq/> , level : 50},
            {icon : <FaJsSquare/> , level : 70},
            {icon : <BsTypescript/> , level : 60},
            {icon : <FaReact/> , level : 50},
            {icon : <RiTailwindCssFill/> , level : 60},
            {icon : <SiApachekafka/> , level : 20},
            {icon : <SiPytest/> , level : 60},
            {icon : <SiJest/> , level : 25},
            {icon : <SiDocker/> , level : 50},
            {icon : <SiGithub/> , level : 60},
        ]

    return (
        <section className="w-4/5 m-auto">
            <SimpleTitle id="tecnologias" className="w-9/10 m-auto my-10" icon={<FaCode/>} p="Principais tecnologias que eu uso">
                tecnologias
            </SimpleTitle>
            <SkillGalery skil_list={skill_list}/>
        </section>
    )
}