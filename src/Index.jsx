//imports
import SimpleHeader from "./assets/components/headers/SimpleHeader"
import PrimaryText from "./assets/features/primary_title/PrimaryTitle"
import ProfilePhoto from "./assets/features/profile_photo/ProfilePhoto"
import SocialLinks from "./assets/features/social/SocialLinks"

function Index() {

    const header_links = [
        {text : "Sobre Mim" , link : null},
        {text : "Tecnologias" , link : null},
        {text : "Conhecimentos" , link : null},
        {text : "Projetos" , link : null},
        {text : "Contato" , link : null},
    ]

    const social_links = [
        {href : null , src : "/icons/linkedin_icon.svg" , alt : "linkedin icon" },
        {href : null , src : "/icons/instagram_icon.svg" , alt : "instagram icon" },
        {href : null , src : "/icons/github_icon.svg" , alt : "github icon" },
    ]

    return (
        <main className="h-4/5">
            <SimpleHeader links_list={header_links}/>
            <section className=" h-3/5 w-4/5 m-auto min-h-fit flex flex-col justify-around items-center">
            <PrimaryText component_id="hello_text" feature_color="--color-light-green" feature_text={["Guilherme","back-end"]} text="Olá, me chamo Guilherme e sou um Desenvolvedor Back-end"/>
            <ProfilePhoto image_url="/images/profile_photo.jpg"/>
            <SocialLinks icons_list={social_links} />
            </section>
        </main>
    )
}

export default Index
