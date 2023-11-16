import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="decolinkMenu">
        <NavLink to="/" className="acceuil">
          ACCUEIL
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
