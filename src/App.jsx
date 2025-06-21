import CardsView from "./components/CardsView"
import Navbar from "./components/Navbar"
import SkillsCard from "./components/SkillsCard"
import SparklesPreview from "./components/Sparklespreview"
import Home from "./components/Sparklespreview"
import About from "./components/About"
import Projects from "./components/CardsView"
import Skills from "./components/SkillsCard"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <SparklesPreview />
        <About />
        <CardsView />
        <SkillsCard />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  )
}

export default App