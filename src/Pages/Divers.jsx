import { useNavigate } from "react-router-dom";

import ensemblemontage from "../assets/porteclef/ensemblemontage.webp";
import chausson1 from "../assets/chaussons-bébé/chausson1.webp";
import decoration16 from "../assets/decorations/decoration16.webp";
import sacplage4 from "../assets/sac-plage/sacplage4.webp";

export default function Divers() {
  const card1 = [ensemblemontage];
  const card2 = [chausson1];
  const card3 = [decoration16];
  const card4 = [sacplage4];

  const navigate = useNavigate();

  function keyRingParadise() {
    navigate("/divers/porte-clef");
  }
  function babySlipperParadise() {
    navigate("/divers/chausson-bb");
  }
  function decorationParadise() {
    navigate("/divers/decoration");
  }
  function bagParadise() {
    navigate("/divers/sac-plage");
  }

  return (
    <>
    <div className="contLink">
      <div className="ContainerLink">
        <div className="LinkTotal">
          <div className="LinkText">
            <p>Porte-clefs</p>
          </div>
          <button onClick={keyRingParadise} className="LinkPicture">
            <img src={card1} alt="" />
          </button>
        </div>

        <div className="LinkTotal">
          <div className="LinkText">
            <p>Chausson bébé</p>
          </div>
          <button onClick={babySlipperParadise} className="LinkPicture">
            <img src={card2} alt="" />
          </button>
        </div>

        <div className="LinkTotal">
          <div className="LinkText">
            <p>Decoration</p>
          </div>
          <button onClick={decorationParadise} className="LinkPicture">
            <img src={card3} alt="" />
          </button>
        </div>
        <div className="LinkTotal">
          <div className="LinkText">
            <p>Sac de plage</p>
          </div>
          <button onClick={bagParadise} className="LinkPicture">
            <img src={card4} alt="" />
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
