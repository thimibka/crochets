import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="Menu">
        <div className="orgaLink">
          <div className="decolinkMenu">
            <NavLink to="/" className="acceuil">
              ACCUEIL
            </NavLink>
          </div>
        </div>
        <div className="decolinkMenu">
          <NavLink to="amigurumi" className="amigurumi">
            AMIGURUMI
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="couverture" className="couverture">
            COUVERTURE
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="cachecou" className="cache-cou">
            CACHE-COU
          </NavLink>
        </div>
        <div className="decolinkMenu">
          <NavLink to="divers" className="divers">
            DIVERS
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
