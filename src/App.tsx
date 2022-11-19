
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import GlobalStyling from './Components/Styles/Global'

function App() {

  return (
    <div className="App">
      <GlobalStyling />
  
      <div style={{minHeight: '100vh', backgroundColor: '#1D2228'}}>
        <Navbar />
        <Hero />
      </div>
      {/* <div style={{minHeight: '100vh'}}> */}
        <Projects />
      {/* </div> */}
    </div>
  )
}

export default App
