import { HashLink as Link } from "react-router-hash-link";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  dark?: boolean; 
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, dark = false }) => (
  <Link
    smooth={true}
    to={to}
    className={`block leading-6 transition duration-150 ease-in-out ${dark ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
  >
    {children}
  </Link>
);

export default NavLink;
