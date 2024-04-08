import About from "./components/About/About";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Request from "./components/Request/Request";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Request setIsOpenModal={setIsOpen} />
      </main>
      <Footer />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};

export default App;
