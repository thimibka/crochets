import cachecou1 from "../assets/snood/cachecou1.webp";
import cachecou2 from "../assets/snood/cachecou2.webp";
import cachecou3 from "../assets/snood/cachecou3.webp";
import cachecou4 from "../assets/snood/cachecou4.webp";

import chale1 from "../assets/chale/chale1.webp";
import chale2 from "../assets/chale/chale2.webp";

export default function SnoodNeckCoverChale() {
  const neckCoverCards = [
    {
      id: 1,
      text: "et son coulis de harico",
      name: cachecou1,
    },
    {
      id: 2,
      text: "description à venir",
      name: cachecou2,
    },
    {
      id: 3,
      text: "description à venir",
      name: cachecou3,
    },
    {
      id: 4,
      text: "description à venir",
      name: cachecou4,
    },

    {
      id: 1,
      text: "description à venir",
      name: chale1,
    },
    {
      id: 2,
      text: "description à venir",
      name: chale2,
    },
  ];

  return (
    <>
     
      <div className="Cont">
        <div className="ContainerCards">
          {neckCoverCards.map((info) => (
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
