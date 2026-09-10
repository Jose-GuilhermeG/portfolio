//import
import { motion } from "framer-motion" // eslint-disable-line
import { useState } from "react"

//components imports
import SimpleHeader from "./components/headers/SimpleHeader"
import PrimaryText from "./features/primary_title/PrimaryTitle"
import ProfilePhoto from "./features/profile_photo/ProfilePhoto"
import SocialLinks from "./features/social/SocialLinks"
import ProjectsView from "./features/projects/projectsView"
import ProjectCard from "./features/projects/projectCard"
import ScrollBar from "./layout/ScrollBar"
import SkillsSection from "./layout/skillsSection"
import IconTitle from "./components/title/IconTitle"
import ExperieceCard from "./features/experiences/experienceCard"
import KnowledgeCard from "./features/knowledge/knowledgeCards"
import ContactSession from "./layout/ContactSection"
import { AlertCard , AlertIcon , AlertTitle } from "./components/alerts/AlertCard"

//icons imports
import { BiListCheck , BiStore, BiUser } from "react-icons/bi"
import { IoConstruct, IoFastFood } from "react-icons/io5"
import { FaMoneyBill , FaCode , FaBook } from "react-icons/fa"
import { MdWorkHistory } from "react-icons/md"
import { RiInformationLine } from "react-icons/ri"
import AboutMeSection from "./layout/AboutMeSection"
import ExperiencesSection from "./layout/ExperiencesSection"
import ProjectsSection from "./layout/ProjectsSection"

export default function Index() {
    const BASE_URL = import.meta.env.BASE_URL

    const [showAlert , setShowAlert] = useState(true);

    const header_links = [
        {text : "Tecnologias" , link : "#tecnologias"},
        {text : "Sobre Mim" , link : "#about_me"},
        {text : "experiencias" , link : "#experiences"},
        {text : "Projetos" , link : '#projects'},
        {text : "Conhecimentos" , link : "#knowledges"},
        {text : "Contato" , link : "#contact"},
    ]

    const social_links = [
        {href : 'https://www.linkedin.com/in/jose-guilhermeg/' , src : "/icons/linkedin_icon.svg" , alt : "linkedin icon" },
        {href : 'https://www.instagram.com/jose.guilherme.g/' , src : "/icons/instagram_icon.svg" , alt : "instagram icon" },
        {href : 'https://github.com/Jose-GuilhermeG' , src : "/icons/github-icon.svg" , alt : "github icon" },
    ]


    const knowgleds = [
        {
            knowledgeName : "Desenvolvimento Backend",
            knowledgeIcon : <FaCode/> , 
            knowDescription : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo.",
        },
        {
            knowledgeName : "Desenvolvimento FrontEnd",
            knowledgeIcon : <FaCode/> , 
            knowDescription : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo.",
        },
        {
            knowledgeName : "Arquitetura de software",
            knowledgeIcon : <FaCode/> , 
            knowDescription : " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod qui soluta eius nobis est. Deleniti, enim? Atque laboriosam earum sed placeat enim nisi eligendi itaque, fugit quo magni! Illo.",
        },
    ]


    return (
        <main className="bg-gray-950">
            <ScrollBar/>
            {showAlert && 
                <AlertCard setShow={setShowAlert}>
                    <AlertIcon>
                        <RiInformationLine/>
                    </AlertIcon>
                    <AlertTitle>
                        Portfolio Em construção
                    </AlertTitle>
                </AlertCard>
            }
            <SimpleHeader links_list={header_links}/>
            <section className=" h-3/5 w-4/5 m-auto min-h-fit flex flex-col justify-around items-center">
            <PrimaryText component_id="hello_text" feature_color="--color-light-green" feature_text={["Guilherme","full-stack"]} text="Olá, me chamo Guilherme e sou um Desenvolvedor full-stack"/>
            <ProfilePhoto image_url="/images/profile_photo.jpeg"/>
            <SocialLinks icons_list={social_links} />
            </section>
            <SkillsSection/>
            <AboutMeSection/>
            <ExperiencesSection/>
            <section className="w-full min-h-fit ">
                   <ProjectsView project_title={<span>food order<br />Pedidos e retirada em tempo real</span>} project_url='https://github.com/Jose-GuilhermeG/food_order'>
                        <div className="w-9/10 grid grid-cols-2 grid-rows-2 m-auto gap-15 mb-50 overflow-hidden">
                             <motion.div 
                             className="mt-[10%]"
                             initial={{opacity : 0 , y : 150}}
                             whileInView={{opacity : 1 , y : 0}}
                             transition={{duration : 0.5 , ease : "easeInOut" }}
                             >
                                <h1 className="text-white p-5 text-4xl font-black font-inter text-center" >
                                    Escolha o seu desejo do dia
                                    <br />
                                    <span className="text-3xl font-normal">
                                        adicione no carrinho
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.img 
                                src={BASE_URL + '/images/last-project-card-1.png'} alt="" className="rounded-2xl" 
                                initial={{opacity : 0 , x : 150}}    
                                whileInView={{opacity : 1 , x : 0}}
                                transition={{duration : 0.5 , ease : "easeInOut" }}
                                
                            />
                            <motion.img 
                                src={BASE_URL + '/images/last-project-card-2.png'} alt="" className="rounded-2xl" 
                                initial={{opacity : 0 , x : -150}}    
                                whileInView={{opacity : 1 , x : 0}}
                                transition={{duration : 0.5 , ease : "easeInOut" }}
                            />
                            <motion.div 
                             className="mt-[10%]"
                             initial={{opacity : 0 , y : 150}}
                             whileInView={{opacity : 1 , y : 0}}
                             transition={{duration : 0.5 , ease : "easeInOut" }}>
                                <h1 className="text-white p-5 text-4xl font-black font-inter text-center" >
                                    Pedidos Feitos , Numero entregue 
                                    <br />
                                    <span className="text-3xl font-normal">
                                        Agora é só esperar ser chamado
                                    </span>
                                </h1>
                            </motion.div>
                        </div>
                   </ProjectsView>
                   <ProjectsSection/>
            </section>
            <section>
                   <IconTitle icon={<FaBook/>} className="m-auto w-9/10" p="O que eu sei" id="knowledges">
                        Conhecimentos
                   </IconTitle>
                    <div className="h-fit p-2 w-9/10 min-h-[40vh] flex flex-col justify-center items-start  gap-3 m-auto mb-10">
                        {knowgleds.map(element=>(<KnowledgeCard {...element}/>))}
                    </div>
            </section>
            <ContactSession/>
        </main>
    )
}
