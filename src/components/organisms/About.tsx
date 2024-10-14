function About() {
  return (
    <>
      <div className="overflow-hidden px-6 lg:overflow-visible lg:px-0">
        <div className="max-w-5xl overflow-hidden lg:overflow-visible lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2">
              <div className="lg:pr-4">
                <p className="text-base font-semibold leading-7 text-blue-600">
                  Chi siamo
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Tutto si può fare
                </h1>
                <p className="mt-10 text-xl leading-8 text-gray-700">
                  Benvenuti in Spinners, la software house che trasforma le
                  vostre idee in soluzioni digitali su misura. Siamo
                  specializzati nello sviluppo di software personalizzati e app
                  mobile, creati per rispondere alle esigenze specifiche di ogni
                  azienda, grande o piccola che sia. Con il nostro approccio
                  innovativo, crediamo che ogni sfida possa essere superata:
                  perché con noi, tutto si può fare.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:grid lg:w-full">
              <div className="mt-4 flex items-center gap-x-6">
                <a
                  href="#"
                  className="flex items-end gap-1.5 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Contattaci ora <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
