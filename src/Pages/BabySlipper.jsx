
import chausson1 from "../assets/chaussons-bébé/chausson1.webp";
import chausson2 from "../assets/chaussons-bébé/chausson2.webp"
import chausson3 from "../assets/chaussons-bébé/chausson3.webp";

export default function BabySlipper() {
  
  const cardsInfos = [
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
    {
      id: 3,
      text: "plume de soi a la bave de crapeau",
      name: chausson3,
    },
  ];

  return (
    <>
      <button>telecharger image</button>
      <input type="file" onChange={handleImageUpload} />

      <h1 className="h1">Les chaussons</h1>
      <div className="ContainerGrid">
        {[...cardsInfos, ...uploadedImages].map((info) => (
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
