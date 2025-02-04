import { useState } from "react";

interface ProjectsProps {
  type: "projects" | "products"; 
}

function Projects({ type }: ProjectsProps) {

  const projects = [
    {
      id: 1,
      year: "2023",
      name: "Selectic",
      title: "Una startup innovativa nel settore del recruiting.",
      description:
        "Abbiamo sviluppato con il team di Selectic la loro piattaforma software che permette alle aziende di testare i candidati per diverse posizioni di lavoro, fornendo dati e analytics dettagliati per facilitare il processo di selezione e assumere i migliori talenti.",
        src: ["./assets/selectic.png", "./assets/selectic.png"],
    },
    {
      id: 2,
      year: "2023",
      name: "RentalPro",
      title: "Un'azienda leader nel settore degli affitti brevi.",
      description:
        "Abbiamo creato una piattaforma su misura che consente ai loro affiliati di gestire facilmente contratti e fatturazione per le proprietà gestite, semplificando l'amministrazione e migliorando l'efficienza operativa.",
        src: ["./assets/rentalpro.png", "./assets/rentalpro2.png"],
    },
    {
      id: 3,
      year: "2024",
      name: "Dulalà App",
      title:
        "Un'app mobile unica che consente agli utenti di scambiare competenze",
      description:
        "ognuno può donare i propri servizi agli utenti dell’app e riceverne da altri, creando una comunità dinamica basata sul donare.",
        src: ["./assets/rentalpro.png", "./assets/rentalpro2.png"],
    },
  ];

  const products = [
    {
      id: 1,
      year: "2023",
      name: "Remedium software",
      title: "La piattaforma ideale per la gestione delle cartelle cliniche.",
      description:
        "Con Remedium, le strutture sanitarie possono gestire facilmente i dati dei pazienti, migliorare la sicurezza delle informazioni e ottimizzare i flussi di lavoro.",
        src: ["./assets/selectic.png", "./assets/selectic.png"],
    },
    {
      id: 2,
      year: "2023",
      name: "Warehouse software",
      title: "Un software avanzato per la gestione del magazzino.",
      description:
        "Progettato per migliorare la logistica, monitorare l'inventario in tempo reale e ridurre i costi operativi.",
        src: ["./assets/warehouse.png", "./assets/warehouse.png"],
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const items = type === 'projects' ? projects : products

  return (
    <>
      {items.map((project, index) => (
        <div key={project.id}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        className={`flex flex-col gap-11 px-6 pb-10 group md:flex-row ${
          index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
         >
          <div className="flex flex-col flex-shrink-0">
            <div className="m-auto">
              <p className="text-sm font-bold text-white mb-2">
                {project.year}
              </p>
              <p className="text-[44px] font-semibold text-blue-600 leading-tight -indent-0.5">
                {project.name}
              </p>
              <p className="text-[44px] text-white max-w-lg leading-10 mb-6">
                {project.title}
              </p>
              <p className="text-sm text-slate-400 max-w-md">
                {project.description}
              </p>
            </div>
          </div>
          <div className="ml-auto rounded-lg">
          <img
              className="h-[300px] md:h-[538px] object-contain rounded-2xl transition-all duration-500"
              src={
                hoveredProject === project.id
                  ? project.src[1]
                  : project.src[0]
              } 
              alt={project.name}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
