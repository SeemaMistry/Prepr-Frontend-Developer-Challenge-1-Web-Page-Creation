import React, {useState} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import {ALL_CONTENT} from './data'


function App() {
  const [selectedContent, setSelectedContent] = useState('labs')

  const onChangeHandler = (category) => setSelectedContent(category)

  console.log(selectedContent)

  // filter courses by state
  const filteredCourses = ALL_CONTENT.filter(item => item.category === selectedContent)

  return (
    <div style={{backgroundColor: '#f3f7fc'}}>
      <Navbar />
      <HeroSection/>
      <CoursesSection state={selectedContent} onChange={onChangeHandler} filteredCourses={filteredCourses}/>
      <div className="m-5">placeholder div for testing scroll</div>
      <div className="m-5">placeholder div for testing scroll</div>
      <div className="m-5">placeholder div for testing scroll</div>
      <div className="m-5">placeholder div for testing scroll</div>
      <div className="m-5">placeholder div for testing scroll</div>

    </div>
  );
}

export default App;
