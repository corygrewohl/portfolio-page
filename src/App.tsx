import AboutMeScreen from "./Components/AboutMeScreen/AboutMeScreen";
import LandingScreen from "./Components/LandingScreen/LandingScreen";
import ProjectScreen from "./Components/ProjectsScreen/ProjectsScreen";
import SkillsScreen from "./Components/SkillsScreen/SkillsScreen";
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
