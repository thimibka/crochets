import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="decoLinkNavbar">
          <NavLink
            to="amigurumi"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            AMIGURUMI
          </NavLink>

          <NavLink
            to="plaid-couverture"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            PLAID / COUVERTURE
          </NavLink>

          <NavLink
            to="echarpe-cachecou-chale"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            ECHARPE/CACHE-COU/CHALE
          </NavLink>

          <NavLink
            to="divers"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            DIVERS
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navbar;
