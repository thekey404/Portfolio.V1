// src/App.jsx
import Navbar from "./components/Navbar";
import SparklesPreview from "./components/Sparklespreview";
import About from "./components/About";
import CardsView from "./components/CardsView";
import SkillsCard from "./components/SkillsCard";
import ContactForm from "./components/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Page Sections with IDs */}
      <div id="home">
        <SparklesPreview />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <CardsView />
      </div>
      <div id="skills">
        <SkillsCard />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default App;
