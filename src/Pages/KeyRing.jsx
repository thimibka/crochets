import beignet from "../assets/porteclef/beignet.webp";
import cerise from "../assets/porteclef/cerise.webp";
import donuts from "../assets/porteclef/donuts.webp";
import ensemble from "../assets/porteclef/ensemble.webp";
import ensemblemontage from "../assets/porteclef/ensemblemontage.webp";
import oreo from "../assets/porteclef/oreo.webp";
import pasteque from "../assets/porteclef/pasteque.webp";
import tassegrise from "../assets/porteclef/tassegrise.webp";
import tassejaune from "../assets/porteclef/tassejaune.webp";
import tong from "../assets/porteclef/tong.webp";

export default function KeyRing() {
  const portecleCards = [
    {
      id: 1,
      text: "description à venir",
      name: beignet,
    },
    {
      id: 2,
      text: "description à venir",
      name: cerise,
    },
    {
      id: 3,
      text: "description à venir",
      name: donuts,
    },
    {
      id: 4,
      text: "description à venir",
      name: ensemble,
    },
    {
      id: 5,
      text: "description à venir",
      name: ensemblemontage,
    },
    {
      id: 6,
      text: "description à venir",
      name: oreo,
    },
    {
      id: 7,
      text: "description à venir",
      name: pasteque,
    },
    {
      id: 8,
      text: "description à venir",
      name: tassegrise,
    },
    {
      id: 9,
      text: "description à venir",
      name: tassejaune,
    },
    {
      id: 10,
      text: "description à venir",
      name: tong,
    },
    {
      id: 11,
      text: "description à venir",
      name: beignet,
    },
  ];
  return (
    <>
      <>
        <h1 className="h1">Les Caches cou</h1>
        <div className="Cont">
          <div className="ContainerCards">
            {portecleCards.map((info) => (
              <div key={info.id} className="grid-item">
                <div className="ImgInfo">
                  <img className="imgBox" src={info.name} id="ige" alt="" />
                </div>
                <div className="TextInfo">
                  <p>{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
}
