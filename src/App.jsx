import { Route, Routes } from "react-router-dom";
import "../src/styles/index.scss";

import Home from "./Pages/Home";
import Amigurumi from "./Pages/Amigurumi";
import NeckCover from "./Pages/NeckCover";
import BabySlipper from "./Pages/BabySlipper";
import Heart from "./Pages/Heart";
import Bookmark from "./Pages/Bookmark";
import BeachPlage from "./Pages/BeachPlage";
import KeyRing from "./Pages/KeyRing";
import PlaidCoverage from "./Pages/Plaid-coverage";
import Divers from "./Pages/Divers";
import Decoration from "./Pages/Decoration";

// import image from "../src/assets/fond-ecran/cf.jpeg";
import ScrollToTop from "./components/ScrollToTop";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <Menu />
      <Navbar />

      {/* <div className="background" style={{ backgroundImage: `url(${image})` }}> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amigurumi" element={<Amigurumi />} />
        <Route path="/plaid-couverture" element={<PlaidCoverage />} />
        <Route path="/echarpe-cachecou-chale" element={<NeckCover />} />
        <Route path="/divers" element={<Divers />} />
        <Route path="/divers/porte-clef" element={<KeyRing />} />
        <Route path="/divers/chausson-bb" element={<BabySlipper />} />
        <Route path="/divers/decoration" element={<Decoration />} />
        <Route path="/divers/sac-plage" element={<BeachPlage />} />

        <Route path="/coeur" element={<Heart />} />
        <Route path="/marque-pages" element={<Bookmark />} />
      </Routes>
      {/* </div> */}

      <ScrollToTop />
    </>
  );
}
