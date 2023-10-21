import plume from "../assets/marque-page/plume.webp";
import plumes from "../assets/marque-page/plumes.webp";
import sourisecrase from "../assets/marque-page/sourisecrase.webp";
import sourismp from "../assets/marque-page/sourismp.webp";
import sourismpplume from "../assets/marque-page/sourismpplume.webp";

export default function Bookmark() {
  const cardsInfos = [
    {
      id: 1,
      text: "plume de soi a la bave de crapeau",
      name: plume,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: plumes,
    },
    {
      id: 3,
      text: "plume de soi a la bave de crapeau",
      name: sourisecrase,
    },
    {
      id: 4,
      text: "plume de soi a la bave de crapeau",
      name: sourismp,
    },
    {
      id: 5,
      text: "plume de soi a la bave de crapeau",
      name: sourismpplume,
    },
  ];
  return (
    <>
      <h1 className="h1">Les marques pages</h1>
      <div className="ContainerGrid">
        {cardsInfos.map((info) => (
          <div key={info.id} className="grid-item">
            <div className="ImgInfo">
              <img src={info.name} id="ige" alt="" />
            </div>
            <div className="TextInfo">
              <p>{info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
