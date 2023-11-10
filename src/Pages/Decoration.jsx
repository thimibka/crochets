import decoration1 from "../assets/decorations/decoration1.webp";
import decoration2 from "../assets/decorations/decoration2.webp";
import decoration3 from "../assets/decorations/decoration3.webp";
import decoration4 from "../assets/decorations/decoration4.webp";
import decoration5 from "../assets/decorations/decoration5.webp";
import decoration6 from "../assets/decorations/decoration6.webp";
import decoration7 from "../assets/decorations/decoration7.webp";
import decoration8 from "../assets/decorations/decoration8.webp";
import decoration9 from "../assets/decorations/decoration9.webp";
import decoration10 from "../assets/decorations/decoration10.webp";
import decoration11 from "../assets/decorations/decoration11.webp";
import decoration12 from "../assets/decorations/decoration12.webp";
import decoration13 from "../assets/decorations/decoration13.webp";
import decoration14 from "../assets/decorations/decoration14.webp";
import decoration15 from "../assets/decorations/decoration15.webp";
import decoration16 from "../assets/decorations/decoration16.webp";
import decoration17 from "../assets/decorations/decoration17.webp";
import decoration18 from "../assets/decorations/decoration18.webp";
import decoration19 from "../assets/decorations/decoration19.webp";
import decoration20 from "../assets/decorations/decoration20.webp";
import decoration21 from "../assets/decorations/decoration21.webp";
import decoration22 from "../assets/decorations/decoration22.webp";
import decoration23 from "../assets/decorations/decoration23.webp";
import decoration24 from "../assets/decorations/decoration24.webp";
import decoration25 from "../assets/decorations/decoration25.webp";
import decoration26 from "../assets/decorations/decoration26.webp";
import decoration27 from "../assets/decorations/decoration27.webp";

export default function Decoration() {
  const decorationCards = [
    {
      id: 1,
      text: "description à venir",
      name: decoration1,
    },
    {
      id: 2,
      text: "description à venir",
      name: decoration2,
    },
    {
      id: 3,
      text: "description à venir",
      name: decoration3,
    },
    {
      id: 4,
      text: "description à venir",
      name: decoration4,
    },
    {
      id: 5,
      text: "description à venir",
      name: decoration5,
    },
    {
      id: 6,
      text: "description à venir",
      name: decoration6,
    },
    {
      id: 7,
      text: "description à venir",
      name: decoration7,
    },
    {
      id: 8,
      text: "description à venir",
      name: decoration8,
    },
    {
      id: 9,
      text: "description à venir",
      name: decoration9,
    },
    {
      id: 10,
      text: "description à venir",
      name: decoration10,
    },
    {
      id: 11,
      text: "description à venir",
      name: decoration11,
    },
    {
      id: 12,
      text: "description à venir",
      name: decoration12,
    },
    {
      id: 13,
      text: "description à venir",
      name: decoration13,
    },
    {
      id: 14,
      text: "description à venir",
      name: decoration14,
    },
    {
      id: 15,
      text: "description à venir",
      name: decoration15,
    },
    {
      id: 16,
      text: "description à venir",
      name: decoration16,
    },
    {
      id: 17,
      text: "description à venir",
      name: decoration17,
    },
    {
      id: 18,
      text: "description à venir",
      name: decoration18,
    },
    {
      id: 19,
      text: "description à venir",
      name: decoration19,
    },
    {
      id: 20,
      text: "description à venir",
      name: decoration20,
    },
    {
      id: 21,
      text: "description à venir",
      name: decoration21,
    },
    {
      id: 22,
      text: "description à venir",
      name: decoration22,
    },
    {
      id: 23,
      text: "description à venir",
      name: decoration23,
    },
    {
      id: 24,
      text: "description à venir",
      name: decoration24,
    },
    {
      id: 25,
      text: "description à venir",
      name: decoration25,
    },
    {
      id: 26,
      text: "description à venir",
      name: decoration26,
    },
    {
      id: 27,
      text: "description à venir",
      name: decoration27,
    },
  ];
  return (
    <>
      <h1 className="h1">Les decorations</h1>
      <div className="Cont">
        <div className="ContainerCards">
          {decorationCards.map((info) => (
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
