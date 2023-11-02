import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBar">
      <div className="decolink">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          ACCUEIL
        </NavLink>
      </div>
      {/* <NavLink
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
      </NavLink>*/}
    </div>
  );
};

export default Navbar;
