import MainButton from "../atoms/MainButton"
import NavLink from "../atoms/NavLink"

function Menu() {

  return (
    <>
      <div className="ml-auto flex items-center gap-8">
        <NavLink text="Chi siamo" to="#"/>
        <NavLink text="Cosa facciamo" to="#" />
        <NavLink text="Mission" to="#" />
        <NavLink text="Progetti" to="#" />
        <MainButton text="Contattaci" to="#" />
      </div>
    </>
  )
}

export default Menu
