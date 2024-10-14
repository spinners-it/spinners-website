import Heading from "../atoms/Heading";
import Header from "../molecules/Header";
import Clients from "./Clients";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Services from "./Services";
import Mission from "./Mission";
import Footer from "../molecules/Footer";

function Home() {
  return (
    <>
      <Header /> 
      <Hero />

      {/* CHI SIAMO */}
      <div id="chi-siamo" className="w-full flex flex-col items-center py-[120px]">
        <About />
      </div>

      {/* COSA FACCIAMO */}
      <div id="cosa-facciamo" className="bg-black w-full flex flex-col items-center py-[120px]">
        <Services />
      </div>

      {/* MISSION */}
      <div id="mission" className="w-full flex flex-col items-center py-[120px]">
        <Mission />
      </div>

      {/* I NOSTRI PROGETTI */}
      <div id="progetti" className="bg-black w-full px-6 flex flex-col items-center pt-[120px] pb-[60px]">
        <div className="w-full max-w-5xl flex items-center justify-center">
          <div className="w-full flex flex-col">
            <p className="text-base font-semibold leading-7 text-blue-600">
              Progetti
            </p>
            <Heading
              level="h3"
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Progetti di successo con i nostri clienti
            </Heading>
            <p className="mt-10 text-xl leading-8 text-slate-400">
              In Spinners, sviluppiamo software innovativi e personalizzati per
              rispondere alle esigenze specifiche dei nostri clienti. Oltre alle
              soluzioni su misura, offriamo anche alcuni dei nostri prodotti
              software che sono pronti per essere implementati nella tua
              azienda:
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl pt-10 flex flex-col">
          <Projects type="projects" />
        </div>

        {/* I NOSTRI PRODOTTI */}
        <div id="prodotti" className="w-full px-6 max-w-5xl pt-[120px] flex items-center justify-center">
          <div className="w-full flex flex-col">
            <p className="text-base font-semibold leading-7 text-blue-600">
              Prodotti
            </p>
            <Heading
              level="h3"
              className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Scopri i nostri software all'avanguardia
            </Heading>
            <p className="mt-10 text-xl leading-8 text-slate-400">
              Abbiamo avuto l'opportunità di collaborare con diverse aziende per
              creare soluzioni software uniche che rispondono alle loro
              specifiche esigenze. Ecco alcuni dei progetti che abbiamo
              condotto:
            </p>
          </div>
        </div>
        <div className="w-full max-w-5xl pt-10 flex flex-col">
          <Projects type="products" />
        </div>
      </div>

      {/* I NOSTRI CLIENTI */}
      <div className="w-full flex flex-col items-center py-[120px]">
        <Clients />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default Home;
