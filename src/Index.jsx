//imports
import SimpleHeader from "./assets/components/headers/SimpleHeader"
import PrimaryText from "./assets/features/primary_title/PrimaryTitle"
import ProfilePhoto from "./assets/features/profile_photo/ProfilePhoto"
import SocialLinks from "./assets/features/social/SocialLinks"
import SimpleTitle from "./assets/components/title/SimpleTitle"
import SkillGalery from "./assets/features/skills/SkillsGalery"

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
        {href : null , src : "/icons/instagram_icon.svg" , alt : "instagram icon" },
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
    ]

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
        </main>
    )
}

export default Index
