import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Componentes
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* Barra de navegação */}
      <Navbar />

      {/* Seção de herói */}
      <Hero />

      {/* Seção de serviços */}
      <Services />

      {/* Banner promocional */}
      <Banner />

      {/* Seção de banner de cobertura (comentado) */}
      {/* <CoverBanner /> */}

      {/* Componente da loja de aplicativos */}
      <AppStore />

      {/* Seção de depoimentos */}
      <Testimonial />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default App;
