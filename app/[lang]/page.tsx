"use client";
import About from "./About";
import CasosClinicos from "./CasosClinicos";
import Contacto from "./Contacto";
import Header from "./Header";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Preguntas from "./Preguntas";
import Services from "./Services";
import Pruebas from "./Pruebas";

const page = () => {





  return (
    <main>
      <Navbar />
      <Header />
      <Services />
      <Pruebas  />
      <CasosClinicos />
      <About />
      <Contacto />
      <Preguntas />

      <Footer />
    </main>
  );
};

export default page;
