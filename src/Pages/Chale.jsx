import chale1 from "../assets/chale/chale1.webp";
import chale2 from "../assets/chale/chale2.webp";

export default function Chale() {
  const chaleCards = [
    {
      id: 1,
      text: "plume de soi a la bave de crapeau",
      name: chale1,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: chale2,
    },
  ];
  return (
    <>
      <h1 className="h1">Les châles</h1>
      <div className="Cont">
        <div className="ContainerCards">
          {chaleCards.map((info) => (
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
  );
}
