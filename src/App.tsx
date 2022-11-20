import { useState } from "react";
import reactLogo from "./assets/react.svg";
import LandingScreen from "./Components/LandingScreen";
import Navbar from "./Components/Navbar";
import ProjectScreen from "./Components/ProjectsScreen";
import GlobalStyling from "./Components/Styles/Global";

function App() {
  return (
    <div className="App">
      <GlobalStyling />
      <LandingScreen />
      <ProjectScreen />
    </div>
  );
}

export default App;
