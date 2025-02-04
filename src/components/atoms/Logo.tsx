import spinnersLogo from '/assets/logo.png';

function Logo() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Logo Image */}
      <a href="#" className="relative">
        <img src={spinnersLogo} className="logo w-full h-full object-contain" alt="Spinners logo" />
      </a>

      {/* Overlay Text */}
      <span className="absolute text-white text-lg font-bold">Spinners</span>
    </div>
  );
}

export default Logo;
