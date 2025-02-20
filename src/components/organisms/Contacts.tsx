import { FaEnvelope } from "react-icons/fa";
import Heading from "../atoms/Heading";

function Contacts() {
  return (
    <>
      <div className="px-6 w-full max-w-5xl pb-10 flex items-center justify-center">
        <div className="w-full text-center flex flex-col">
          <Heading
            level="h3"
            className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Contattaci
          </Heading>
          <p className="mt-10 text-xl leading-8 text-gray-700">
            Siamo qui per aiutarti! Per qualsiasi domanda o per richiedere maggiori informazioni sui nostri servizi, non esitare a contattarci.
          </p>
        </div>
      </div>

      
          {/* Email Contact */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex items-center gap-3">
              <FaEnvelope className="h-6 w-6 text-gray-600" />
              <span className="text-lg text-gray-700">Email: <a href="mailto:spinnerstech@gmail.com" className="text-blue-600 hover:underline">spinnerstech@gmail.com</a></span>
            </div>
          </div>

      {/* GRID */}
      <div className="w-full px-6 max-w-5xl">
        <section className="bg-white">
          {/*<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <FaFacebook className="h-9 w-9 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <FaTwitter className="h-9 w-9 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <FaLinkedin className="h-9 w-9 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                <FaInstagram className="h-9 w-9 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
          </div>*/}


          <div className="mt-6 flex items-center gap-x-6 justify-center">
            <a
              href="mailto:spinnerstech@gmail.com"
              className="flex items-end gap-1.5 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Contattaci{" "}
              <span aria-hidden="true">→</span>
            </a>
          </div>

        </section>
      </div>
    </>
  );
}

export default Contacts;
