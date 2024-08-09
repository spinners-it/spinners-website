import Heading from "../atoms/Heading";

function Hero() {
  return (
    <>
      <div className="bg-slate-300 h-screen">
        <Heading level="h1" className="pt-36 text-4xl text-custom-gray">
          Spinners slogan
        </Heading>
      </div>
    </>
  );
}

export default Hero;
