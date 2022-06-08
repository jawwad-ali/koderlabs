import { Nav, HeroSection, Offer } from "./components"
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

  return (
    <div>
      <Nav />
      <HeroSection />
      <Offer />
    </div>
  );
}

export default App;
