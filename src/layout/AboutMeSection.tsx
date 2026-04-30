import { BiUser } from "react-icons/bi";
import IconTitle from "../components/title/IconTitle";

export default function AboutMeSection(){

        const about_me = `Desenvolvedor Backend com foco em Python, atuando principalmente com Django e Django REST Framework no desenvolvimento de APIs REST escaláveis, também possuindo experiência com FastAPI para construção de serviços de alta performance.

Possuo experiência na aplicação de Arquitetura Hexagonal, Clean Architecture e microsserviços, utilizando boas práticas de engenharia de software, padrões de projeto e automação de testes, visando qualidade, manutenibilidade e escalabilidade das soluções.

Tenho conhecimento sólido em ferramentas e tecnologias amplamente utilizadas no mercado, como Docker e Docker Compose, Prometheus, MySQL, Redis, Kafka, além de versionamento de código com Git/GitHub e automação de pipelines com GitHub Actions.

Também possuo experiência em frontend com React, voltada para integração e consumo de APIs, o que me permite ter uma visão mais completa do fluxo de comunicação entre backend e frontend.

Estou em constante evolução, estudando arquitetura de software, mensageria, escalabilidade e boas práticas de desenvolvimento, além de estar em processo de aprendizado em Java com Spring Boot e língua inglesa.`

    return (
        <section className="w-full py-20">
            <IconTitle icon={<BiUser/>} className="w-[72%] m-auto" p="algumas informações interesantes" id="about_me">
                Sobre Mim
            </IconTitle>
            <aside>
                <p className="w-2/5 mx-[14%] my-10 bg-gray-800 text-white font-light min-h-[40vh] rounded-2xl text-[18px]  p-5">
                    {about_me}
                </p>
            </aside>
        </section>
    )
}