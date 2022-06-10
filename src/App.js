import { Nav, HeroSection, Offer, Softwares, Platform } from "./components"
import AOS from 'aos';
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh()
  }, []);

  useEffect(() => {
    console.log(window.pageYOffset)
  }, [window.pageYOffset])

  return (
    <div>
      <Nav />
      <HeroSection />
      <Offer />
      <Softwares />
      <Platform />
    </div>
  );
}

export default App;
