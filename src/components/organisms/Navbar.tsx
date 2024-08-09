import Logo from "../atoms/Logo";
import Menu from "../molecules/Menu";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full flex items-center px-6 pb-3 pt-4 bg-white">
        <Logo />
        <Menu />
      </div>
    </>
  );
}

export default Navbar;
