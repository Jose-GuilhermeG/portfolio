import { BiListCheck, BiStore, BiUser } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { IoConstruct, IoFastFood } from "react-icons/io5";
import ProjectCard from "../features/projects/projectCard";
import IconTitle from "../components/title/IconTitle";
import { BsQuestion, BsQuestionCircle } from "react-icons/bs";
import type{ ProjectCardProtocol } from "../types/Projecttypes";

export default function ProjectsSection() {
    const projetos : ProjectCardProtocol[] = [
            {
                title : "simple to do" , 
                skills : ["django","django restframework","postgres" , "docker" , "react" , "typescript" ,"shadcn" , "tailwindcss"] , 
                description : `Uma aplicação de gerenciamento de tarefas focada na experiência do usuário e na organização pessoal. O projeto foi desenvolvido com o objetivo de consolidar conceitos de integração entre Frontend e Backend, garantindo uma interface fluida e tendo Implementação de um CRUD completo com persistência de dados, tipagem estática para maior segurança do código e suporte a Markdown.`, 
                icon : <BiListCheck/>},
            {
                title : "EclipseApi" , 
                skills : ["django","django restframework","postgres" , "docker" , "pytest", "kafka" , "redis"] , 
                description : `Uma API robusta voltada para o ecossistema de e-commerce, projetada para lidar com fluxos complexos de compra e comunicação. O foco principal deste projeto é a confiabilidade e a escalabilidade do sistema de vendas utilizando mensageria Assíncrona para desacoplar o envio de notificações (e-mails), garantindo que a experiência de compra não seja interrompida por processos externos. O projeto é assegurado por uma suíte de testes automatizados, garantindo a integridade das regras de negócio e a prevenção de regressões durante o desenvolvimento.` , 
                icon : <BiStore/>},
            {
                title : "food-order" , 
                skills : ["fastapi","react","websockt" , "react" , "tailwindcss" , "docker"] , 
                description :`Sistema completo de gestão de pedidos em tempo real para praças de alimentação ou restaurantes. A aplicação conecta todas as pontas da operação, desde o cliente até a cozinha, otimizando o fluxo de trabalho e sendo construído sob os princípios da Arquitetura Limpa (Clean Architecture), o sistema mantém uma separação clara entre as regras de negócio e as interfaces externas. A aplicação utiliza comunicação em tempo real para atualização de status e implementa uma gestão de filas eficiente, garantindo que a equipe operacional siga uma ordem lógica e organizada de produção.` ,
                icon : <IoFastFood/>
            },
            {
                title : "Meu portfolio",
                icon : <BiUser/>,
                skills : ["react" , "tailwindcss"],
                description : "Um hub centralizado que serve como minha vitrine digital, projetado para apresentar minha trajetória, competências técnicas e os resultados dos meus projetos de forma clara e profissional.",
                isFinalize : false,
                repositoryLink : "https://github.com/Jose-GuilhermeG/portfolio",
            },
            {
                title : "CryptoWatch",
                icon : <FaMoneyBill/>,
                skills : ["fastapi","rabitmq","docker","postgres","redis","pytest","arquitetura orientada a eventos","arquitetura hexagonal"],
                description : "Sistema de monitoramento de criptomoedas",
                isFinalize : false,
            },
            {
                title : "SimpleQuestion",
                icon : <BsQuestionCircle/>,
                skills : ["React","TailwindCss","Shadcn"],
                description : "Um projeto de quiz interativo desenvolvido com React, TypeScript, TailwindCSS e shadcn/ui. O objetivo é oferecer uma experiência divertida e educativa com perguntas de múltipla escolha em diferentes categorias.",
                isFinalize : true,
                repositoryLink : "https://github.com/Jose-GuilhermeG/simpleQuiz"
            },
        ]

        return (
            <>
                <IconTitle icon={<IoConstruct/>} className="m-auto w-9/10 p-2" p="criações minhas">
                    Projetos
                </IconTitle>
                <div className={`flex gap-10 w-full m-auto h-fit py-10 flex-wrap justify-center`}>
                    {projetos.map(element=><ProjectCard {...element}/>)}
                </div>
            </>
        )

}