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
      text: "plume de soi a la bave de crapeau",
      name: beignet,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: cerise,
    },
    {
      id: 3,
      text: "plume de soi a la bave de crapeau",
      name: donuts,
    },
    {
      id: 4,
      text: "plume de soi a la bave de crapeau",
      name: ensemble,
    },
    {
      id: 5,
      text: "plume de soi a la bave de crapeau",
      name: ensemblemontage,
    },
    {
      id: 6,
      text: "plume de soi a la bave de crapeau",
      name: oreo,
    },
    {
      id: 7,
      text: "plume de soi a la bave de crapeau",
      name: pasteque,
    },
    {
      id: 8,
      text: "plume de soi a la bave de crapeau",
      name: tassegrise,
    },
    {
      id: 9,
      text: "plume de soi a la bave de crapeau",
      name: tassejaune,
    },
    {
      id: 10,
      text: "plume de soi a la bave de crapeau",
      name: tong,
    },
    {
      id: 11,
      text: "plume de soi a la bave de crapeau",
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
