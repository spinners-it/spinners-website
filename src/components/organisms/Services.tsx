import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/20/solid";

export default function Services() {
  return (
    <div className="max-w-5xl px-6 overflow-hidden lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2">
          <div className="lg:pr-4">
            <p className="text-base font-semibold leading-7 text-blue-600">
              Cosa facciamo
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">
              Soluzioni digitali su misura per il tuo business
            </h1>
            <p className="mt-10 text-xl leading-8 text-slate-400">
              In <b>Spinners</b>, ci dedichiamo alla creazione di software e app mobile
              progettati per ottimizzare i processi aziendali e migliorare
              l'efficienza operativa. Offriamo soluzioni personalizzate che si
              adattano perfettamente alle vostre esigenze, aiutandovi a crescere
              e a raggiungere i vostri obiettivi.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 lg:grid lg:w-full">
          <div>
            <div className="text-base leading-7">
              <ul role="list" className="space-y-8 text-slate-400">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      Software Personalizzati:{" "}
                    </strong>{" "}
                    <br></br>
                    Creiamo software su misura che rispondono alle vostre
                    specifiche esigenze aziendali, con un focus sulla massima
                    usabilità e funzionalità.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-blue-600"
                  />
                  <span>
                    <strong className="font-semibold text-white">
                      Sviluppo di App Mobile:{" "}
                    </strong>{" "}
                    <br></br>
                    Progettiamo app mobile innovative, intuitive e sicure,
                    pensate per migliorare l'esperienza utente e facilitare
                    l'interazione con i vostri clienti.
                  </span>
                </li>
              </ul>
              <div className="mt-12 flex items-center gap-x-6">
                <a
                  href="#"
                  className="flex items-end gap-1.5 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Contattaci per una consulenza gratuita <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
