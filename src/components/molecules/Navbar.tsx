import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import NavLink from "../atoms/NavLink";
import Logo from "../atoms/Logo";
import TextButton from "../atoms/TextButton";

const navigation = [
  { name: "Chi siamo", href: "#chi-siamo" },
  { name: "Cosa facciamo", href: "#cosa-facciamo" },
  { name: "Mission", href: "#mission" },
  { name: "Progetti", href: "#progetti" },
  { name: "Prodotti", href: "#prodotti" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} dark={true}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden text-xl lg:flex lg:flex-1 lg:justify-end">
          <TextButton text="Contattaci" to="mailto:spinnerstech@gmail.com" dark={true} />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="text-xl space-y-8 py-8">
                {navigation.map((item) => (
                  <NavLink key={item.name} to={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="text-2xl py-6">
                <TextButton text="Contattaci" to="mailto:spinnerstech@gmail.com" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

export default Navbar;
