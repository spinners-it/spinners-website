import Card from "../atoms/Card";
import Heading from "../atoms/Heading";

function Hero() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col text-center items-center max-w-2xl">
          <Heading level="h1" className="text-7xl font-semibold text-graphite">
            Tutto si può fare
          </Heading>
          <Heading
            level="h2"
            className="text-center max-w-md pt-8 text-[18px] text-graphite"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            harum voluptatum pariatur non ratione voluptatem sunt et libero.
          </Heading>
        </div>
      </div>

      {/* SECTION */}
      <div className="w-full flex flex-col items-center pt-[120px] pb-[120px]">
        <div className="w-full max-w-5xl pb-10 flex items-center justify-center">
          <div className="w-full flex justify-between">
            <Heading
              level="h3"
              className="text-6xl font-semibold text-graphite max-w-[430px]"
            >
              When people do work with us
            </Heading>
            <a className="font-medium mt-auto" href="#">
              <button className="px-5 py-4 bg-graphite text-white rounded-2xl shadow-md hover:bg-opacity-70 transition-all">
                Let's build something
              </button>
            </a>
          </div>
        </div>

        {/* GRID */}
        <div className="w-full max-w-5xl pt-10 grid grid-rows-2 grid-flow-col gap-10">
          <Card
            shadow
            title="Creative Expertise"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
          <Card
            title="SEO Optimization"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
          <Card
            title="Responsive Designs"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
          <Card
            title="Quick Turnaround"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
          <Card
            title="Exceptional Support"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
          <Card
            title="Custom Solutions"
            content="Unique designs tailored to your brand, captivating users with innovative visuals."
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full flex flex-col items-center pt-20 pb-10">
        <div className="w-full max-w-5xl pb-10 flex items-center justify-center">
          <div className="w-full flex gap-32">
            <Heading
              level="h3"
              className="flex-shrink-0 text-7xl font-semibold text-graphite"
            >
              Our projects
            </Heading>
            <p className="flex-shrink max-w-xl ml-auto font-medium text-sm mt-auto text-graphite">
              We offer services to help early-stage startups find their brand
              voice and showcase a product worth buying. Everything is focused
              on a successful launch.
            </p>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="w-full max-w-5xl pt-10 flex flex-col">
          <div className="flex gap-11 pb-10 group">
            <div className="flex flex-col flex-shrink-0">
              <div className="m-auto">
                <p className="text-sm text-graphite mb-2">2023</p>
                <p className="text-[44px] text-lavander_gray leading-tight -indent-0.5">Olliviere</p>
                <p className="text-[44px] text-graphite leading-10 w-5/6">How we furthered AI in tech.</p>
              </div>
              <div className="relative w-[116px] bg-blue-100">
              <div className="absolute right-0 bottom-0 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <button className="py-3.5 px-6 rounded-xl text-sm bg-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-300">View case</button>
              </div>
              </div>
            </div>
            <div className="ml-auto rounded-lg">
              <img className="h-[538px] object-cover rounded-3xl" src="./assets/ex1.avif" alt="..." />
            </div>
          </div>

          <div className="flex gap-11 pb-10 pt-10 group">
            <div className="flex flex-col flex-shrink-0">
              <div className="m-auto">
                <p className="text-sm text-graphite mb-2">2023</p>
                <p className="text-[44px] text-lavander_gray leading-tight -indent-0.5">Utopia</p>
                <p className="text-[44px] text-graphite leading-10 w-5/6">How we furthered AI in tech.</p>
              </div>
              <div className="relative w-[116px] bg-blue-100">
              <div className="absolute right-0 bottom-0 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <button className="py-3.5 px-6 rounded-xl text-sm bg-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-300">View case</button>
              </div>
              </div>
            </div>
            <div className="ml-auto rounded-lg">
              <img className="h-[538px] object-cover rounded-3xl" src="./assets/ex2.avif" alt="..." />
            </div>
          </div>

       
          <div className="flex gap-11 pb-10 pt-10 group">
            <div className="flex flex-col flex-shrink-0">
              <div className="m-auto">
                <p className="text-sm text-graphite mb-2">2023</p>
                <p className="text-[44px] text-lavander_gray leading-tight -indent-0.5">Arper</p>
                <p className="text-[44px] text-graphite leading-10 w-5/6">How we furthered AI in tech.</p>
              </div>
              <div className="relative w-[116px] bg-blue-100">
              <div className="absolute right-0 bottom-0 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <button className="py-3.5 px-6 rounded-xl text-sm bg-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-300">View case</button>
              </div>
              </div>
            </div>
            <div className="ml-auto rounded-lg">
              <img className="h-[538px] object-cover rounded-3xl" src="./assets/ex3.avif" alt="..." />
            </div>
          </div>

         
          <div className="flex gap-11 pb-10 pt-10 group">
            <div className="flex flex-col flex-shrink-0">
              <div className="m-auto">
                <p className="text-sm text-graphite mb-2">2023</p>
                <p className="text-[44px] text-lavander_gray leading-tight -indent-0.5">Jubilant</p>
                <p className="text-[44px] text-graphite leading-10 w-5/6">How we furthered AI in tech.</p>
              </div>
              <div className="relative w-[116px] bg-blue-100">
              <div className="absolute right-0 bottom-0 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <button className="py-3.5 px-6 rounded-xl text-sm bg-slate-200 text-slate-600 hover:bg-slate-50 transition-all duration-300">View case</button>
              </div>
              </div>
            </div>
            <div className="ml-auto rounded-lg">
              <img className="h-[538px] object-cover rounded-3xl" src="./assets/ex1.avif" alt="..." />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Hero;
