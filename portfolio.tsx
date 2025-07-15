"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronDown,
  ChevronUp,
  Download,
  Home,
  FolderOpen,
  Briefcase,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Figma,
  Code,
  Database,
  GitBranch,
  Rocket,
  FileCode,
  Triangle,
  Calendar,
  MapPin,
  Building,
  X,
} from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  name: string
  description: string
  fullDescription: string
  color: string
  icon: string
  technologies: string[]
  status: string
  year: string
  image: string
}

export default function Component() {
  const [activeTab, setActiveTab] = useState("inicio")
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "Akademus",
      description: "Aplicativo para organização acadêmica",
      fullDescription:
        "Akademus é uma plataforma completa para organização acadêmica que permite aos estudantes gerenciar suas disciplinas, horários, notas e tarefas de forma integrada. O aplicativo oferece funcionalidades como calendário acadêmico, lembretes de provas, controle de frequência e análise de desempenho.",
      color: "#3f4aab",
      icon: "A",
      technologies: ["React Native", "TypeScript", "Supabase", "Expo", "AsyncStorage", "Axios"],
      status: "Concluído",
      year: "2023",
      image: "/Akademus.svg?height=200&width=400",
    },
    {
      id: 2,
      name: "Developer Community",
      description: "Site feito para divulgação da Developer Community",
      fullDescription:
        "Site pertencente à Developer Community, uma comunidade de desenvolvedores que visa compartilhar conhecimento e experiências. O site inclui seções de projetos, perfis de membros e portifolios",
      color: "#373737",
      icon: "🔧",
      technologies: ["Next.js", "Tailwind CSS", "Vercel", "Prisma", "JavaScript"],
      status: "Em desenvolvimento",
      year: "2024",
      image: "/ProjectsPage.svg?height=300&width=400",
    },
    {
      id: 3,
      name: "Zelus",
      description: "App para Reportar os Problemas em Timon-Ma",
      fullDescription:
        "Aplicativo mobile desenvolvido para facilitar o reporte de problemas urbanos na cidade de Timon-MA. Os cidadãos podem fotografar e reportar problemas como buracos, iluminação pública defeituosa, lixo acumulado, entre outros, diretamente para a prefeitura.",
      color: "#1a90ff",
      icon: "Z",
      technologies: ["React Native", "Node.js", "Typescript", "Adonis","PostgreSQL", "Node.js", "Figma"],
      status: "Em andamento",
      year: "2025",
      image: "/Zelus.svg?height=300&width=400",
    },
    {
      id: 4,
      name: "RecipeNow",
      description: "App de receitas feito com dummyjson",
      fullDescription:
        "Aplicativo mobile de receitas culinárias que utiliza a API DummyJSON para fornecer uma vasta coleção de receitas. Inclui funcionalidades como busca por ingredientes, favoritos, timer de cozimento e lista de compras automática.",
      color: "#6aae26",
      icon: "🍽️",
      technologies: ["React Native", "API REST", "AsyncStorage", "Expo Router", "Axios"],
      status: "Concluído",
      year: "2025",
      image: "/Recipe.svg?height=300&width=400",
    },
    {
      id: 5,
      name: "NextLevelAI",
      description: "Plataforma de IA voltada para marketing digital",
      fullDescription:
        "NextLevelAI é uma plataforma inovadora que utiliza inteligência artificial para otimizar campanhas de marketing digital. A plataforma oferece ferramentas de análise de dados, segmentação de público e automação de anúncios, permitindo que empresas maximizem seu retorno sobre investimento em marketing.",
      color: "#fb9e33",
      icon: "P",
      technologies: ["Figma"],
      status: "Em desenvolvimento",
      year: "2025",
      image: "/NextLevel.svg?height=300&width=400",
    },
  ]

  const experiences = [
    {
      id: 1,
      company: "Developer Community",
      position: "Desenvolvedor Full-Stack / Chefe de Design",
      period: "Outubro 2024 - Presente",
      location: "Teresina, PI",
      description:
        "Desenvolvimento de aplicações web e mobile usando React, Node.js e React Native. Liderança de equipe de 4 desenvolvedores.",
      technologies: ["React", "Node.js", "TypeScript", "Git", "Figma"],
    },
    {
      id: 2,
      company: "NextLevel",
      position: "Designer UI/UX",
      period: "Mar 2025 - Mai 2025",
      location: "Remote",
      description: "Criação de wireframes e protótipos de alta fidelidade. Colaboração com desenvolvedores para implementação de designs responsivos.",
      technologies: ["Miro", "Figma"],
    },
  ]

  const tools = [
    { name: "Figma", icon: Figma, category: "Design" },
    { name: "React Native", icon: Code, category: "Mobile" },
    { name: "Supabase", icon: Database, category: "Backend" },
    { name: "Github", icon: Github, category: "Version Control" },
    { name: "Git", icon: GitBranch, category: "Version Control" },
    { name: "Adonis", icon: Rocket, category: "Backend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Python", icon: FileCode, category: "Backend" },
    { name: "Typescript", icon: FileCode, category: "Language" },
    { name: "Next.js", icon: Triangle, category: "Frontend" },
  ]

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#222222] border border-[#373737] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: project.color }}
              >
                {project.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      project.status === "Concluído" ? "bg-[#6aae26] text-white" : "bg-[#fb9e33] text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-[#696969] text-sm">{project.year}</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-[#696969] hover:text-white hover:bg-[#373737]"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mb-6">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg bg-[#373737]"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Sobre o Projeto</h3>
            <p className="text-[#aaaaaa] leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-[#373737] text-[#aaaaaa] text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="bg-[#6aae26] hover:bg-[#6aae26]/80 text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto
            </Button>
            <Button variant="outline" className="border-[#373737] text-[#aaaaaa] hover:bg-[#373737] bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              Código Fonte
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "projetos":
        return (
          <div className="px-8">
            <h2 className="text-[#6aae26] text-lg font-bold mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#6aae26] mr-3"></span>
              Todos os Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-[#222222] border-[#373737] relative group hover:border-[#6aae26] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.icon}
                      </div>
                      <div className="flex gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            project.status === "Concluído" ? "bg-[#6aae26] text-white" : "bg-[#fb9e33] text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                        <ExternalLink className="w-4 h-4 text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity hover:text-[#6aae26]" />
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{project.name}</h3>
                    <p className="text-[#aaaaaa] text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-[#373737] text-[#aaaaaa] text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#373737] text-[#aaaaaa] text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="text-[#696969] text-xs">{project.year}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "experiencias":
        return (
          <div className="px-8">
            <h2 className="text-[#ac6e61] text-lg font-bold mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#ac6e61] mr-3"></span>
              Experiência Profissional
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className="bg-[#222222] border-[#373737] hover:border-[#ac6e61] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-[#ac6e61] flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{exp.position}</h3>
                          <p className="text-[#ac6e61] font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-[#696969]">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#aaaaaa] text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#373737] text-[#aaaaaa] text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-[#7dc5ff] text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#7dc5ff] mr-2"></span>
                Sobre mim
              </h2>

              <Card className="bg-[#222222] border-[#373737] mb-4">
                <CardContent className="p-4">
                  <button
                    onClick={() => toggleSection("designer")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-[#7dc5ff] font-medium">Designer</span>
                    <div className="transform transition-transform duration-200">
                      {expandedSection === "designer" ? (
                        <ChevronUp className="w-4 h-4 text-[#696969]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#696969]" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedSection === "designer" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#aaaaaa] text-sm mt-3 leading-relaxed">
                      Sou apaixonado por design e faço isso a 3 anos, experimentando várias ferramentas para criar
                      experiências digitais chamativas e intuitivas, e assim me aprimorando cada dia mais em novas
                      formas de inovação no design de apps, sites, e-commerce, logo e etc.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#222222] border-[#373737]">
                <CardContent className="p-4">
                  <button
                    onClick={() => toggleSection("programador")}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="text-[#7dc5ff] font-medium">Programador</span>
                    <div className="transform transition-transform duration-200">
                      {expandedSection === "programador" ? (
                        <ChevronUp className="w-4 h-4 text-[#696969]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#696969]" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedSection === "programador" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#aaaaaa] text-sm mt-3 leading-relaxed">
                      Com mais de quatro anos de experiência no campo da programação, atuo como desenvolvedor
                      full-stack, com especialização em criação de sites e aplicativos móveis. Minha trajetória
                      profissional é marcada pela busca constante de soluções inovadoras e eficientes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <h2 className="text-[#6aae26] text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#6aae26] mr-2"></span>
                Projetos Recentes
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {projects.slice(0, 4).map((project) => (
                  <Card
                    key={project.id}
                    className="bg-[#222222] border-[#373737] relative group hover:border-[#6aae26] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardContent className="p-4">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center mb-3 text-white text-sm font-bold"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.icon}
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">{project.name}</h3>
                      <p className="text-[#696969] text-xs">{project.description}</p>
                      <ExternalLink className="w-4 h-4 text-[#696969] absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:text-[#6aae26]" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <h2 className="text-[#fb9e33] text-lg font-semibold mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#fb9e33] mr-2"></span>
                Ferramentas
              </h2>

              <div className="space-y-3">
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-[#aaaaaa] hover:text-white transition-all duration-200 cursor-pointer group"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded bg-[#373737] group-hover:bg-[#fb9e33] transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium">{tool.name}</span>
                        <div className="text-xs text-[#696969]">{tool.category}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#191919] text-white">
      <div className="flex justify-between items-start p-8">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-[#373737]">
            <Image
              src="/profileTemporary.jpg?height=96&width=96"
              alt="Isaac Costa Silva"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Isaac Costa Silva</h1>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-[#6aae26] animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#6aae26] animate-ping"></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#6aae26] opacity-75 animate-pulse"></div>
              </div>
              <span className="text-[#6aae26] text-sm">Status: Pronto para um novo trabalho!</span>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="bg-transparent border-[#373737] text-white transition-all duration-200"
        >
          <Download className="w-4 h-4 mr-2" />
          Baixar Currículo
        </Button>
      </div>

      <div className="px-8 mb-8">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            onClick={() => setActiveTab("inicio")}
            className={`transition-all duration-200 ${
              activeTab === "inicio"
                ? "bg-[#6d3970] text-white hover:bg-[#6d3970]/80"
                : "text-[#6d3970] hover:bg-[#373737]"
            }`}
          >
            <Home className="w-4 h-4 mr-2" />
            Início
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("projetos")}
            className={`transition-all duration-200 ${
              activeTab === "projetos"
                ? "bg-[#6aae26] text-white hover:bg-[#6aae26]/80"
                : "text-[#6aae26] hover:bg-[#373737]"
            }`}
          >
            <FolderOpen className="w-4 h-4 mr-2" />
            Projetos
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("experiencias")}
            className={`transition-all duration-200 ${
              activeTab === "experiencias"
                ? "bg-[#ac6e61] text-white hover:bg-[#ac6e61]/80"
                : "text-[#ac6e61] hover:bg-[#373737]"
            }`}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Experiências
          </Button>
        </div>
      </div>

      <div className="transition-all duration-300 ease-in-out">{renderContent()}</div>

      <div className="mt-16 pb-8">
        <div className="text-center mb-6">
          <h3 className="text-[#696969] text-sm font-medium">Redes Sociais</h3>
        </div>
        <div className="flex justify-center gap-8 text-[#696969] text-sm">
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
            <Mail className="w-4 h-4" />
            <span>isaacs.code@gmail.com</span>
          </div>
          <a
            href="https://github.com/isaac-const"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>isaac-const</span>
          </a>
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
