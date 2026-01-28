import React, { useRef } from 'react'; // Adicionado
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Adicionado

import Navbar from './components/NavbarMenu'
import Main from './components/Main'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const svgBoxRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // 1. Setup inicial (sempre invisível no começo)
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      opacity: 0
    });

    // 2. Criamos a animação mas com um pequeno truque de tempo
    const animation = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none", 
      scrollTrigger: {
        trigger: svgBoxRef.current,
        start: "top top",     
        end: "+=1500",        
        scrub: 3,            
        markers: false,
        // Isso garante que a animação não "pule" caso o usuário já esteja com o scroll embaixo
        onEnter: () => gsap.to(path, { opacity: 1, duration: 0.5 }) 
      },
      // O delay aqui faz o GSAP esperar antes de começar a "ouvir" o scroll
      delay: 1.2 
    });

    // Opcional: Impedir que a bolinha apareça antes do tempo usando um timer simples
    setTimeout(() => {
        if(path) path.style.opacity = "1";
    }, 1200);

  }, []);

  return (
    // Removida a tag <body> (substituída por <div> por padrão do React)
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
      
      <div id="svg-box" ref={svgBoxRef} style={{ textAlign: 'center' }}>
        <svg width="100%" height="2400" viewBox="0 0 1852 2980" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef} d="M1543.03 20C1543.03 20 1723.63 191.491 1794.53 330.5C2093.82 917.315 390.615 -316.278 108.531 279C43.7713 415.662 21.7066 504.779 20.0313 656C12.3477 1349.55 1421.54 137.304 1728.03 759.5C2062.81 1439.13 -265.19 720.664 64.0317 1403C365.341 2027.48 1611.77 637.644 1794.53 1306.5C1844.04 1487.7 1844.14 1606.33 1794.53 1787.5C1615.87 2440.03 240.125 1215.28 64.0313 1868.5C15.9011 2047.04 16.8352 2163.21 64.0313 2342C237.349 2998.56 1943.11 1849.4 1794.53 2512C1750.97 2706.28 1720.89 2866.01 1543.03 2955.5C1433.95 3010.39 1195.53 2837.5 1195.53 2837.5L877.531 2785.5" stroke="#7E57C2" stroke-width="40" stroke-linecap="round"/>
        </svg>
     
      </div>
    </div>
  );
}

export default App;