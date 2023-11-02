import { Route, Routes } from "react-router-dom";
import "../src/styles/index.scss";
import backgroundImage from "./assets/fond-ecran/blanc.jpg";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Amigurumi from "./Pages/Amigurumi";
import Coverage from "./Pages/Coverage";
import NeckCover from "./Pages/NeckCover";
import BabySlipper from "./Pages/BabySlipper";
import Heart from "./Pages/Heart";
import Bookmark from "./Pages/Bookmark";
import BeachPlage from "./Pages/BeachPlage";
import KeyRing from "./Pages/KeyRing";
import PlaidCoverage from "./Pages/Plaid-coverage";
import SnoodNeckCoverChale from "./Pages/SnoodNeckCoverChale";
import Divers from "./Pages/Divers";
import Plaid from "./Pages/Plaid";
import Snood from "./Pages/Snood";
import Chale from "./Pages/Chale";
import Decoration from "./Pages/Decoration";

export default function App() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/amigurumi" element={<Amigurumi />} />

          <Route path="/plaid-couverture" element={<PlaidCoverage />} />
          <Route path="/plaid-couverture/plaid" element={<Plaid />} />
          <Route path="/plaid-couverture/couvertures" element={<Coverage />} />

          <Route
            path="/echarpe-cachecou-chale"
            element={<SnoodNeckCoverChale />}
          />
          <Route path="/echarpe-cachecou-chale/snood" element={<Snood />} />
          <Route path="/echarpe-cachecou-chale/chale" element={<Chale />} />
          <Route
            path="/echarpe-cachecou-chale/cache-cou"
            element={<NeckCover />}
          />

          <Route path="/divers" element={<Divers />} />
          <Route path="/divers/porte-clef" element={<KeyRing />} />
          <Route path="/divers/chausson-bb" element={<BabySlipper />} />
          <Route path="/divers/decoration" element={<Decoration />} />
          <Route path="/divers/sac-plage" element={<BeachPlage />} />

          <Route path="/coeur" element={<Heart />} />
          <Route path="/marque-pages" element={<Bookmark />} />
        </Routes>
      </div>
    </>
  );
}
