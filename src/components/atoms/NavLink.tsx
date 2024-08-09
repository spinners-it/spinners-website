interface NavLinkProps {
  text: string;
  to: string;
}
function NavLink(props: NavLinkProps) {
  return (
    <>
      <a className="font-medium" href={props.to}>
        {props.text}
      </a>
    </>
  );
}

export default NavLink;
