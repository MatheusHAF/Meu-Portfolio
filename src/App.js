import React, { useRef } from "react";
import "./App.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import DotGrid from "./animations/DotGrid";

import Navbar from "./components/NavbarMenu";
import Main from "./components/Main";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const svgBoxRef = useRef(null);
  const pathRef = useRef(null);

  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh", position: "fixed" }}>
        <DotGrid />
      </div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
