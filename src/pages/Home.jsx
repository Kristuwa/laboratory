
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import Request from "../components/Request/Request";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const blocks = {
    aboutRef: useRef(null),
    galleryRef: useRef(null),
    requestRef: useRef(null),
  };

  const scrollToBlock = (block = "") => {
    if (block in blocks) {
      blocks[block].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBlock(params.block);
  }, [params]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About ref={blocks.aboutRef} />
        <Gallery ref={blocks.galleryRef} />
        <Request ref={blocks.requestRef} setIsOpenModal={setIsOpen} />
      </main>
      <Footer />
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
};

export default Home;
