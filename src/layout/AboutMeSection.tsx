import { BiUser } from "react-icons/bi";
import IconTitle from "../components/title/IconTitle";

export default function AboutMeSection(){

        const about_me = `Desenvolvedor full-stack com foco em backend escalável, atuando principalmente com Django e Django REST Framework no desenvolvimento de APIs REST, também possuindo experiência com FastAPI para construção de serviços de alta performance.
Possuo experiência na aplicação de Arquitetura Hexagonal, Clean Architecture e microsserviços, utilizando boas práticas de engenharia de software, padrões de projeto e automação de testes, visando qualidade, manutenibilidade e escalabilidade das soluções.
Tenho conhecimento sólido em ferramentas e tecnologias amplamente utilizadas no mercado, como Docker e Docker Compose, MySQL, Redis, RabbitMQ, além de versionamento de código com Git/GitHub e automação de pipelines com GitHub Actions.
No frontend, desenvolvo interfaces dinâmicas com React e TypeScript, aplicando Jest para testes e TailwindCSS para otimização de estilos. Além disso, utilizo bibliotecas de componentes como Shadcn para criar interfaces modernas e consistentes.
Estou em constante evolução, atualmente estudando Java com Spring Boot, arquitetura orientada a eventos e inglês, sempre buscando aprimorar minhas habilidades em escalabilidade e boas práticas de desenvolvimento.`

    return (
        <section className="w-[72%] max-sm:w-9/10 py-20 m-auto">
            <IconTitle icon={<BiUser/>} className="m-auto" p="algumas informações interesantes" id="about_me">
                Sobre Mim
            </IconTitle>
            <aside className="w-full">
                <p className="w-3/5 my-10 bg-card text-foreground dark:shadow-xl font-light min-h-[40vh] rounded-2xl text-[18px] max-xl:w-full p-5 max-sm:text-[0.9rem]">
                    {about_me}
                </p>
            </aside>
        </section>
    )
}