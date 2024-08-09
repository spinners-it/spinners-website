import Logo from "../atoms/Logo"
import NavItem from "../atoms/NavItem"

function Navbar() {

  return (
    <>
      <div className="flex items-center px-8 py-6 bg-slate-500">
      <Logo />
      <div className="ml-auto flex gap-8">
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </div>

      </div>
    </>
  )
}

export default Navbar
