import { useState } from "react";
import { BiUser, BiCodeAlt, BiSmile } from "react-icons/bi";
import IconTitle from "../components/title/IconTitle";

export default function AboutMeSection() {
  const [activeTab, setActiveTab] = useState<"dev" | "personal">("dev");

  const devContent = [
    "Desenvolvedor full-stack com foco em backend escalável, atuando principalmente com Django e Django REST Framework no desenvolvimento de APIs REST, também possuindo experiência com FastAPI para construção de serviços de alta performance.",
    "Possuo experiência na aplicação de Arquitetura Hexagonal, Clean Architecture e microsserviços, utilizando boas práticas de engenharia de software, padrões de projeto e automação de testes, visando qualidade, manutenibilidade e escalabilidade das soluções.",
    "Tenho conhecimento sólido em ferramentas e tecnologias amplamente utilizadas no mercado, como Docker e Docker Compose, MySQL, Redis, RabbitMQ, além de versionamento de código com Git/GitHub e automação de pipelines com GitHub Actions.",
    "No frontend, desenvolvo interfaces dinâmicas com React e TypeScript, aplicando Jest para testes e TailwindCSS para otimização de estilos. Além disso, utilizo bibliotecas de componentes como Shadcn para criar interfaces modernas e consistentes.",
    "Estou em constante evolução, atualmente estudando Java com Spring Boot, arquitetura orientada a eventos e inglês, sempre buscando aprimorar minhas habilidades em escalabilidade e boas práticas de desenvolvimento."
  ];

  const personalContent = [
    "Além do código, sou uma pessoa apaixonada por tecnologia, aprendendo continuamente sobre esse mundo com IOT , cloud , games , robotica e etc.",
    "No meu tempo livre, gosto de conversar,praticar esportes,jogar videogame,tocar e ouvir musica,ler , estudar e me divertir com o que conseguir.",
  ];

  return (
    <section className="w-[72%] max-sm:w-9/10 py-20 m-auto">
      <IconTitle
        icon={<BiUser />}
        className="m-auto"
        p="algumas informações interessantes"
        id="about_me"
      >
        Sobre Mim
      </IconTitle>

      <div className="w-3/5 max-xl:w-full my-10">
        <div className="flex justify-center w-full mb-6">
          <div className="inline-flex p-1 bg-muted/50 dark:bg-muted/20 rounded-xl w-full justify-between gap-10">
            <button
              onClick={() => setActiveTab("dev")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all flex-1 duration-200 bg-card ${
                activeTab === "dev"
                  ? "bg-light-green text-foreground shadow-sm font-semibold text-white "
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BiCodeAlt className="text-lg" />
              <span>Desenvolvedor</span>
            </button>

            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-card flex-1 ${
                activeTab === "personal"
                  ? "bg-light-green text-foreground shadow-sm font-semibold text-white "
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <BiSmile className="text-lg" />
              <span>Pessoa</span>
            </button>
          </div>
        </div>

        
        <aside className="w-full">
          <div className="bg-card text-foreground dark:shadow-xl font-light min-h-[40vh] rounded-2xl p-6 md:p-8 text-[18px] max-sm:text-[0.9rem] transition-all duration-300">
            {activeTab === "dev" ? (
              <div className="space-y-4">
                {devContent.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {personalContent.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}