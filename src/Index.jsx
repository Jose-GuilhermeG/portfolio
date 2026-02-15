//import
import { motion } from "framer-motion"

//components imports
import SimpleHeader from "./components/headers/SimpleHeader"
import PrimaryText from "./features/primary_title/PrimaryTitle"
import ProfilePhoto from "./features/profile_photo/ProfilePhoto"
import SocialLinks from "./features/social/SocialLinks"
import SimpleTitle from "./components/title/SimpleTitle"
import SkillGalery from "./features/skills/SkillsGalery"
import FloatButton from "./features/float_button/FloatButton"
import InfoContainer from "./components/info_container/InfoContainer"
import ItemListIcon from "./components/lists/ItemList"
import ItemListTitle from "./components/lists/ItemListTitle"
import ProjectsView from "./features/projects/projects_view"

//icons imports
import phone_icon from "./assets/icons/phone-icon.svg"
import email_icon from "./assets/icons/email-icon.svg"
import location_icon from "./assets/icons/location-icon.svg"

//skils icons
import DjangoIcon from "./assets/icons/djangoIcon.svg?react"
import MysqlIcon from "./assets/icons/mysqlIcon.svg?react"
import DockerIcon from "./assets/icons/dockerIcon.svg?react"
import RedisIcon from "./assets/icons/redisIcon.svg?react"
import KafkaIcon from "./assets/icons/kafkaIcon.svg?react"
import PythonIcon from "./assets/icons/pythonIcon.svg?react"
import JavaIcon from "./assets/icons/javaIcon.svg?react"
import SpringBootIcon from "./assets/icons/springBootIcon.svg?react"
import ReactIcon from "./assets/icons/reactIcon.svg?react"
import TailwindIcon from "./assets/icons/tailwindIcon.svg?react"
import PrometheusIcon from "./assets/icons/prometheusIcon.svg?react"

export default function Index() {
    const BASE_URL = import.meta.env.BASE_URL

    const header_links = [
        {text : "Sobre Mim" , link : "#about_me"},
        {text : "Tecnologias" , link : "#tecnologias"},
        {text : "Conhecimentos" , link : null},
        {text : "Projetos" , link : '#projects'},
        {text : "Contato" , link : "#general"},
    ]

    const social_links = [
        {href : 'https://www.linkedin.com/in/jose-guilhermeg/' , src : "/icons/linkedin_icon.svg" , alt : "linkedin icon" },
        {href : 'https://www.instagram.com/jose.guilherme.g/' , src : "/icons/instagram_icon.svg" , alt : "instagram icon" },
        {href : 'https://github.com/Jose-GuilhermeG' , src : "/icons/github-icon.svg" , alt : "github icon" },
    ]

    const skill_list = [
        {icon : <DjangoIcon/>},
        {icon: <MysqlIcon/>},
        {icon : <DockerIcon/>},
        {icon: <RedisIcon/>},
        {icon : <KafkaIcon/>},
        {icon: <PythonIcon/>},
        {icon : <JavaIcon/>},
        {icon : <SpringBootIcon/>},
        {icon : <ReactIcon/>},
        {icon : <TailwindIcon/>},
        {icon : <PrometheusIcon/>},
    ]

    const phone_number = "84 999377152"
    const email = "example@example.com"
    const location = "Rodolfo Fernandes (RN)"

    const about_me = `Desenvolvedor Backend com foco em Python, atuando principalmente com Django e Django REST Framework no desenvolvimento de APIs REST escaláveis, também possuindo experiência com FastAPI para construção de serviços de alta performance.

Possuo experiência na aplicação de Arquitetura Hexagonal, Clean Architecture e microsserviços, utilizando boas práticas de engenharia de software, padrões de projeto e automação de testes, visando qualidade, manutenibilidade e escalabilidade das soluções.

Tenho conhecimento sólido em ferramentas e tecnologias amplamente utilizadas no mercado, como Docker e Docker Compose, Prometheus, MySQL, Redis, Kafka, além de versionamento de código com Git/GitHub e automação de pipelines com GitHub Actions.

Também possuo experiência em frontend com React, voltada para integração e consumo de APIs, o que me permite ter uma visão mais completa do fluxo de comunicação entre backend e frontend.

Estou em constante evolução, estudando arquitetura de software, mensageria, escalabilidade e boas práticas de desenvolvimento, além de estar em processo de aprendizado em Java com Spring Boot e língua inglesa.`


    return (
        <main>
            <SimpleHeader links_list={header_links}/>
            <section className=" h-3/5 w-4/5 m-auto min-h-fit flex flex-col justify-around items-center">
            <PrimaryText component_id="hello_text" feature_color="--color-light-green" feature_text={["Guilherme","back-end"]} text="Olá, me chamo Guilherme e sou um Desenvolvedor Back-end"/>
            <ProfilePhoto image_url="/images/profile_photo.jpg"/>
            <SocialLinks icons_list={social_links} />
            </section>
            <section className="w-4/5 m-auto">
                <SimpleTitle content="tecnologias" id="tecnologias"/>
                <SkillGalery skil_list={skill_list}/>
            </section>
            <section className="w-full py-20">
                <SimpleTitle content="Informações" id="tecnologias"/>
                <div className="w-4/5 m-auto h-[80vh] grid grid-cols-2 grid-rows-2 gap-5 py-5 max-xl:grid-cols-1 max-xl:grid-rows-4 max-xl:h-fit max-micro:flex flex-col">
                    <InfoContainer title="Sobre Mim" style={{gridRowStart : 1 , gridRowEnd : 4 }} id="about_me">
                        <p className="w-4/5 h-9/10 m-auto text-[18px] overflow-y-scroll scrollbar-hide">
                            {about_me}
                        </p>
                    </InfoContainer>
                    <InfoContainer title="Geral" id="general">
                        <ul>
                            <ItemListIcon src={location_icon} content={location} alt={"location icon"}/>
                            <ItemListIcon src={phone_icon} content={phone_number} alt="phone number icon"/>
                            <ItemListIcon src={email_icon} content={email} alt={"email icon"}/>
                        </ul>
                    </InfoContainer>
                    <InfoContainer title="Experiencias">
                        <ItemListTitle title="Desenvolvedor Full stack" content="Aplicação web construida com django , implementação de funcionalidades e testes junto a manutenção no sistema" extra="Tecnologias : python , django , postgres , html , tailwind , docker , selenium" />
                    </InfoContainer>
                </div>
            </section>
            <section className="bg-gray-900 w-full">
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
            </section>
            <FloatButton src="/icons/translate-icon.svg" alt="translate icon" />
        </main>
    )
}
