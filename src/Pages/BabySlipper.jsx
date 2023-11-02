import chausson1 from "../assets/chaussons-bébé/chausson1.webp";
import chausson2 from "../assets/chaussons-bébé/chausson2.webp";

export default function BabySlipper() {
  const chaussonCards = [
    {
      id: 1,
      text: "plume de soi aapeau",
      name: chausson1,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: chausson2,
    },
  ];

  return (
    <>
      <>
        <h1 className="h1">Chausson-bebe</h1>
        <div className="Cont">
          <div className="ContainerCards">
            {chaussonCards.map((info) => (
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
