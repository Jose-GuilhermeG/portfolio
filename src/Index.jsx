//import

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

//icons imports
import phone_icon from "./assets/icons/phone-icon.svg"
import email_icon from "./assets/icons/email-icon.svg"
import location_icon from "./assets/icons/location-icon.svg"

function Index() {

    const header_links = [
        {text : "Sobre Mim" , link : null},
        {text : "Tecnologias" , link : "#tecnologias"},
        {text : "Conhecimentos" , link : null},
        {text : "Projetos" , link : null},
        {text : "Contato" , link : null},
    ]

    const social_links = [
        {href : 'https://www.linkedin.com/in/jose-guilhermeg/' , src : "/icons/linkedin_icon.svg" , alt : "linkedin icon" },
        {href : 'https://www.instagram.com/jose.guilherme.g/' , src : "/icons/instagram_icon.svg" , alt : "instagram icon" },
        {href : 'https://github.com/Jose-GuilhermeG' , src : "/icons/github_icon.svg" , alt : "github icon" },
    ]

    const skill_list = [
        {image : "/icons/django-green-icon.svg" , hover_image : "/icons/django-white-icon.svg"},
        {image : "/icons/mysql-green-icon.svg" , hover_image : "/icons/mysql-white-icon.svg"},
        {image : "/icons/docker-green-icon.svg" , hover_image : "/icons/docker-white-icon.svg"},
        {image : "/icons/redis-green-icon.svg" , hover_image : "/icons/redis-white-icon.svg"},
        {image : "/icons/kafka-green-icon.svg" , hover_image : "/icons/kafka-white-icon.svg"},
        {image : "/icons/python-green-icon.svg" , hover_image : "/icons/python-white-icon.svg"},
        {image : "/icons/java-green-icon.svg" , hover_image : "/icons/java-white-icon.svg"},
        {image : "/icons/spring-boot-green-icon.svg" , hover_image : "/icons/spring-boot-white-icon.svg"},
        {image : "/icons/react-green-icon.svg" , hover_image : "/icons/react-white-icon.svg"},
        {image : "/icons/tailwind-green-icon.svg" , hover_image : "/icons/tailwind-white-icon.svg"},
        {image : "/icons/prometheus-green-icon.svg" , hover_image : "/icons/prometheus-white-icon.svg"},
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
        <main className="h-4/5">
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
            <section className="w-full">
                <SimpleTitle content="Informações" id="tecnologias"/>
                <div className="w-4/5 m-auto h-[80vh] grid grid-cols-2 grid-rows-2 gap-5 py-5">
                    <InfoContainer title="Sobre Mim" style={{gridRowStart : 1 , gridRowEnd : 4 }}>
                        <p className="w-4/5 h-9/10 m-auto text-[18px]">
                            {about_me}
                        </p>
                    </InfoContainer>
                    <InfoContainer title="Geral">
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
            <FloatButton src="/icons/translate-icon.svg" alt="translate icon" />
        </main>
    )
}

export default Index
