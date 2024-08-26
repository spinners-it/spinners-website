import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full flex items-center justify-center px-6 pb-3 pt-4 bg-white">
        <div className="w-full max-w-5xl flex items-center">
        <Logo />
        <Menu />
        </div>
      </div>
    </>
  );
}

export default Navbar;
