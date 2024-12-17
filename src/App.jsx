import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroV3 from "./components/HeroV3.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.closest("a")?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="text-white">
      <CustomCursor />
      <Header />
      <HeroV3 />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
