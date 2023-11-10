import sacplage1 from "../assets/sac-plage/sacplage1.webp";
import sacplage2 from "../assets/sac-plage/sacplage2.webp";
import sacplage3 from "../assets/sac-plage/sacplage3.webp";
import sacplage4 from "../assets/sac-plage/sacplage4.webp";
import sacplage5 from "../assets/sac-plage/sacplage5.webp";
import sacplage6 from "../assets/sac-plage/sacplage6.webp";

export default function BeachPlage() {
  const sacCards = [
    {
      id: 1,
      text: "description à venir",
      name: sacplage1,
    },
    {
      id: 2,
      text: "description à venir",
      name: sacplage2,
    },
    {
      id: 3,
      text: "description à venir",
      name: sacplage3,
    },
    {
      id: 4,
      text: "description à venir",
      name: sacplage4,
    },
    {
      id: 5,
      text: "description à venir",
      name: sacplage5,
    },
    {
      id: 6,
      text: "description à venir",
      name: sacplage6,
    },
  ];
  return (
    <>
      <h1 className="h1">Les sacs de plage</h1>
      <div className="Cont">
        <div className="ContainerCards">
          {sacCards.map((info) => (
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
