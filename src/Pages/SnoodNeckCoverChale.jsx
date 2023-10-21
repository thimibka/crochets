import { useNavigate } from "react-router-dom";
import chale1 from "../assets/chale/chale1.webp";
import cachecou1 from "../assets/snood/cachecou1.webp";

export default function SnoodNeckCoverChale() {
  const card1 = [cachecou1];
  const card2 = [chale1];

  const navigate = useNavigate();

  // function echarpeParadise() {
  //   navigate("/echarpe");
  // }
  function neckCoverParadise() {
    navigate("/echarpe-cachecou-chale/cache-cou");
  }
  function chaleParadise() {
    navigate("/echarpe-cachecou-chale/chale");
  }

  return (
    <>
     <div className="contLink">
      <div className="ContainerLink">
        <div className="LinkTotal">
          <div className="LinkText">
            <p>Cache-cou</p>
          </div>
          <button onClick={neckCoverParadise} className="LinkPicture">
            <img src={card1} alt="" />
          </button>
        </div>
        <div className="LinkTotal">
          <div className="LinkText">
            <p>Chale</p>
          </div>
          <button onClick={chaleParadise} className="LinkPicture">
            <img src={card2} alt="" />
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
