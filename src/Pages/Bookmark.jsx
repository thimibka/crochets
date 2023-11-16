import plume from "../assets/marque-page/plume.webp";
import plumes from "../assets/marque-page/plumes.webp";
import sourisecrase from "../assets/marque-page/sourisecrase.webp";
import sourismp from "../assets/marque-page/sourismp.webp";
import sourismpplume from "../assets/marque-page/sourismpplume.webp";

export default function Bookmark() {
  const cardsInfos = [
    {
      id: 1,
      text: "description à venir",
      name: plume,
    },
    {
      id: 2,
      text: "description à venir",
      name: plumes,
    },
    {
      id: 3,
      text: "description à venir",
      name: sourisecrase,
    },
    {
      id: 4,
      text: "description à venir",
      name: sourismp,
    },
    {
      id: 5,
      text: "description à venir",
      name: sourismpplume,
    },
  ];
  return (
    <>

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
