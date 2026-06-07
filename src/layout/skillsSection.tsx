import SimpleTitle from "../components/title/SimpleTitle";
import SkillGalery from "../features/skills/SkillsGalery";

import { SiFastapi , SiPostgresql , SiPython , SiDjango, SiRabbitmq, SiApachekafka, SiPytest, SiJest, SiDocker, SiGithub, SiGit } from "react-icons/si"
import { DiJava, DiMysql, DiRedis } from "react-icons/di"
import { BiLogoSpringBoot } from "react-icons/bi"
import { BsTypescript } from "react-icons/bs"
import {FaAws, FaCode, FaJsSquare, FaLinux, FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { type SkillType } from "../types/skillsTypes";

export default function SkillsSection(){

     const skill_list : Array<SkillType> = [
            {icon : <SiDjango/> , level : 50},
            {icon : <SiFastapi/> , level : 50},
            {icon : <SiPostgresql/> , level : 50},
            {icon : <SiPython/> , level : 70},
            {icon : <BiLogoSpringBoot/> , level : 5},
            {icon : <DiJava/> , level : 40},
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
            {icon : <SiGit/> , level : 60},
            {icon : <FaLinux/> , level : 35 },
            {icon : <FaAws/> , level : 14}
        ]

    return (
        <section className="w-4/5 m-auto">
            <SimpleTitle id="tecnologias" className="w-9/10 m-auto my-10" icon={<FaCode/>} p="Principais tecnologias que eu uso">
                tecnologias
            </SimpleTitle>
            <SkillGalery skill_list={skill_list}/>
        </section>
    )
}