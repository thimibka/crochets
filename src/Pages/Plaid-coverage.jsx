import couverture1 from "../assets/couvertures/couverture1.webp";
import couverture2 from "../assets/couvertures/couverture2.webp";
import couverture3 from "../assets/couvertures/couverture3.webp";
import couverture4 from "../assets/couvertures/couverture4.webp";
import couverture5 from "../assets/couvertures/couverture5.webp";
import couverture6 from "../assets/couvertures/couverture6.webp";
import couverture7 from "../assets/couvertures/couverture7.webp";
import couverture8 from "../assets/couvertures/couverture8.webp";
import couverture9 from "../assets/couvertures/couverture9.webp";
import couverture10 from "../assets/couvertures/couverture10.webp";
import couverture11 from "../assets/couvertures/couverture11.webp";
import couverture12 from "../assets/couvertures/couverture12.webp";
import couverture13 from "../assets/couvertures/couverture13.webp";
import couverture14 from "../assets/couvertures/couverture14.webp";
import couverture15 from "../assets/couvertures/couverture15.webp";
import couverture16 from "../assets/couvertures/couverture16.webp";
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

export default function PlaidCoverage() {
  const plaidCoverageCards = [
    {
      id: 1,
      text: "plume de soi a la bave de crapeau",
      name: couverture1,
    },
    {
      id: 2,
      text: "plume de soi a la bave de crapeau",
      name: couverture2,
    },
    {
      id: 3,
      text: "plume de soi a la bave de crapeau",
      name: couverture3,
    },
    {
      id: 4,
      text: "plume de soi a la bave de crapeau",
      name: couverture4,
    },
    {
      id: 5,
      text: "plume de soi a la bave de crapeau",
      name: couverture5,
    },
    {
      id: 6,
      text: "plume de soi a la bave de crapeau",
      name: couverture6,
    },
    {
      id: 7,
      text: "plume de soi a la bave de crapeau",
      name: couverture7,
    },
    {
      id: 8,
      text: "plume de soi a la bave de crapeau",
      name: couverture8,
    },
    {
      id: 9,
      text: "plume de soi a la bave de crapeau",
      name: couverture9,
    },
    {
      id: 10,
      text: "plume de soi a la bave de crapeau",
      name: couverture10,
    },
    {
      id: 11,
      text: "plume de soi a la bave de crapeau",
      name: couverture11,
    },
    {
      id: 12,
      text: "plume de soi a la bave de crapeau",
      name: couverture12,
    },
    {
      id: 13,
      text: "plume de soi a la bave de crapeau",
      name: couverture13,
    },
    {
      id: 14,
      text: "plume de soi a la bave de crapeau",
      name: couverture14,
    },
    {
      id: 15,
      text: "plume de soi a la bave de crapeau",
      name: couverture15,
    },
    {
      id: 16,
      text: "plume de soi a la bave de crapeau",
      name: couverture16,
    },
    {
      id: 17,
      text: "ehjdgdhcgjhsd",
      name: plaid1,
    },
    {
      id: 18,
      text: "ehjdgdhcgjhsd",
      name: plaid2,
    },
    {
      id: 19,
      text: "ehjdgdhcgjhsd",
      name: plaid3,
    },
    {
      id: 20,
      text: "ehjdgdhcgjhsd",
      name: plaid4,
    },
    {
      id: 21,
      text: "ehjdgdhcgjhsd",
      name: plaid5,
    },
    {
      id: 22,
      text: "ehjdgdhcgjhsd",
      name: plaid6,
    },
    {
      id: 23,
      text: "ehjdgdhcgjhsd",
      name: plaid7,
    },
    {
      id: 24,
      text: "ehjdgdhcgjhsd",
      name: plaid8,
    },
    {
      id: 25,
      text: "ehjdgdhcgjhsd",
      name: plaid9,
    },
    {
      id: 26,
      text: "ehjdgdhcgjhsd",
      name: plaid10,
    },
    {
      id: 27,
      text: "ehjdgdhcgjhsd",
      name: plaid11,
    },
  ];

  return (
    <>
      <h1 className="h1">Les Plaids et Couvertures</h1>
      <div className="Cont">
        <div className="ContainerCards">
          {plaidCoverageCards.map((info) => (
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
