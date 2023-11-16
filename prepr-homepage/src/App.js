import React, {useState} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";

// Dummy data for course cards
import {ALL_CONTENT} from './data'


function App() {
  // state determines which category of course-cards to display out of 3 categories: labs, challenges, projects
  const [selectedContent, setSelectedContent] = useState('labs')

  const onChangeHandler = (category) => setSelectedContent(category)

  // filter courses by state
  const filteredCourses = ALL_CONTENT.filter(item => item.category === selectedContent)

  return (
    <div style={{backgroundColor: '#f3f7fc'}}>
      <Navbar />
      <HeroSection/>
      <CoursesSection onChange={onChangeHandler} filteredCourses={filteredCourses} state={selectedContent}/>
    </div>
  );
}

export default App;
