import { BrowserRouter } from "react-router-dom";
import {About,Contact, Experience, Feedbacks,Hero, Navbar, Tech, Works, Awards, StarsCanvas} from './components';
import React from "react";

function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero />
      </div>
        <About/>
        <Awards />
        <Feedbacks />
        <Experience/>
        <Works />
        <Tech />
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
