import couverture6 from "../assets/couvertures/couverture6.webp";
import couverture7 from "../assets/couvertures/couverture7.webp";
import { useNavigate } from "react-router-dom";

export default function PlaidCoverage() {
  const card1 = [couverture6];
  const card2 = [couverture7];

  const navigate = useNavigate();

  function plaidParadise() {
    navigate("/plaid-couverture/plaid");
  }
  function coverageParadise() {
    navigate("/plaid-couverture/couvertures");
  }

  return (
    <>
    <div className="contLink">
      <div className="ContainerLink">
        <div className="LinkTotal">
              <div className="LinkText">
            <p>Plaid</p>
          </div>
          <button onClick={plaidParadise} className="LinkPicture">
            <img src={card1} alt="" />
          </button>
        </div>
        <div className="LinkTotal">
          <div className="LinkText">
            <p>Couverture</p>
          </div>
          <button onClick={coverageParadise} className="LinkPicture">
            <img src={card2} alt="" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
