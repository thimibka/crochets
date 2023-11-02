import plaid1 from "../assets/plaid/plaid1.webp";
import plaid2 from "../assets/plaid/plaid2.webp";
import plaid3 from "../assets/plaid/plaid3.webp";
import plaid4 from "../assets/plaid/plaid4.webp";
import plaid5 from "../assets/plaid/plaid5.webp";
import plaid6 from "../assets/plaid/plaid6.webp";
import plaid7 from "../assets/plaid/plaid7.webp";
import plaid8 from "../assets/plaid/plaid8.webp";
import plaid9 from "../assets/plaid/plaid9.webp";
import plaid10 from "../assets/plaid/plaid10.webp";
import plaid11 from "../assets/plaid/plaid11.webp";
export default function KeyRing() {
const plaidCards =[
  {
    id:1,
    text: "ehjdgdhcgjhsd",
    name: plaid1,
  },
  {
    id:2,
    text: "ehjdgdhcgjhsd",
    name: plaid2,
  },{
    id:3,
    text: "ehjdgdhcgjhsd",
    name: plaid3,
  },{
    id:4,
    text: "ehjdgdhcgjhsd",
    name: plaid4,
  },{
    id:5,
    text: "ehjdgdhcgjhsd",
    name: plaid5,
  },{
    id:6,
    text: "ehjdgdhcgjhsd",
    name: plaid6,
  },{
    id:7,
    text: "ehjdgdhcgjhsd",
    name: plaid7,
  },{
    id:8,
    text: "ehjdgdhcgjhsd",
    name: plaid8,
  },{
    id:9,
    text: "ehjdgdhcgjhsd",
    name: plaid9,
  },{
    id:10,
    text: "ehjdgdhcgjhsd",
    name: plaid10,
  },{
    id:11,
    text: "ehjdgdhcgjhsd",
    name: plaid11,
  },
  
]
  return (
    <>
      <h1 className="h1">Les Plaids</h1>
      <div className="Cont">
      <div className="ContainerCards">
        {plaidCards.map((info)=>(
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

