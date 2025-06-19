import About from "./components/About"
import CardsView from "./components/CardsView"
import Navbar from "./components/Navbar"
import SkillsCard from "./components/SkillsCard"
import SparklesPreview from "./components/Sparklespreview"


const App = () => {
  return (
    <div>
      <Navbar />
      <SparklesPreview />
      <About />
      <CardsView />
      <SkillsCard />
    </div>
  )
}

export default App