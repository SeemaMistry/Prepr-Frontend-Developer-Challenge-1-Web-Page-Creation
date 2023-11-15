import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <CoursesSection />
    <div className="m-5">placeholder div for testing scroll</div>
    <div className="m-5">placeholder div for testing scroll</div>
    <div className="m-5">placeholder div for testing scroll</div>
    <div className="m-5">placeholder div for testing scroll</div>
    <div className="m-5">placeholder div for testing scroll</div>

    </>
  );
}

export default App;
