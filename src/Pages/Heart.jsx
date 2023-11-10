import coeur1 from "../assets/coeur/coeur1.webp";
import coeur2 from "../assets/coeur/coeur2.webp";
import coeur3 from "../assets/coeur/coeur3.webp";
import coeur4 from "../assets/coeur/coeur4.webp";
import coeur5 from "../assets/coeur/coeur5.webp";

export default function Heart() {
  const cardsInfos = [
    {
      id: 1,
      text: "description à venir",
      name: coeur1,
    },
    {
      id: 2,
      text: "description à venir",
      name: coeur2,
    },
    {
      id: 3,
      text: "description à venir",
      name: coeur3,
    },
    {
      id: 4,
      text: "description à venir",
      name: coeur4,
    },
    {
      id: 5,
      text: "description à venir",
      name: coeur5,
    },
  ];
  return (
    <>
      <h1 className="h1">Coeurs</h1>
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
