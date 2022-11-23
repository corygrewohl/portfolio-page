import AboutMeScreen from "./Components/AboutMeScreen";
import LandingScreen from "./Components/LandingScreen";
import ProjectScreen from "./Components/ProjectsScreen";
import SkillsScreen from "./Components/SkillsScreen";
import GlobalStyling from "./Components/Styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyling />
      <LandingScreen />
      <SkillsScreen />
      <ProjectScreen />
      <AboutMeScreen />
    </div>
  );
}

export default App;
