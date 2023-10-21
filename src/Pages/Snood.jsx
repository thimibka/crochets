import cachecou1 from "../assets/snood/cachecou1.webp";
import cachecou2 from "../assets/snood/cachecou2.webp";
import cachecou3 from "../assets/snood/cachecou3.webp";
import cachecou4 from "../assets/snood/cachecou4.webp";

export default function Snood() {
  const snoodCards = [

    {
      id: 1,
      text: "plume de soi a la bave de crapeau",
      name: cachecou1,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: cachecou2,
    },
    {
      id: 3,
      text: "plume de soi a la bave de crapeau",
      name: cachecou3,
    },
    {
      id: 4,
      text: "plume de soi a la bave de crapeau",
      name: cachecou4,
    },


  ];
  return (
    <>
      <h1 className="h1">Les caches cou</h1>
        <div className="Cont">
          <div className="ContainerCards">
            {snoodCards.map((info) => (
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
