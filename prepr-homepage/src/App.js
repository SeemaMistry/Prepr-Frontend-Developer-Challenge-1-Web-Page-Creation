import React, {useState} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import AccessabilityModal from "./components/AccessabilityModal";
// import './App.css'

// Dummy data for course cards
import {ALL_CONTENT} from './data'


function App() {
  // state for darkMode
  const [darkModeIsActivate, setDarkModeIsActivate] = useState(true)
  const bgColorDarkMode = darkModeIsActivate ? '#252525' : '#f3f7fc'

  // state determines which category of course-cards to display out of 3 categories: labs, challenges, projects
  const [selectedContent, setSelectedContent] = useState('labs')

  const onChangeHandler = (category) => setSelectedContent(category)
  const onDarkModeHandler = () => {setDarkModeIsActivate(prevState => !prevState)}

  // filter courses by state
  const filteredCourses = ALL_CONTENT.filter(item => item.category === selectedContent)

  return (
    <div 
    data-bs-theme={darkModeIsActivate ? 'dark' : ''} 
    style={{backgroundColor: `${bgColorDarkMode}`}}
    >
      <AccessabilityModal/>
      <Navbar activateDarkMode={darkModeIsActivate} onDarkMode={onDarkModeHandler}/>
      <HeroSection activateDarkMode={darkModeIsActivate}/>
      <CoursesSection onChange={onChangeHandler} filteredCourses={filteredCourses} state={selectedContent} activateDarkMode={darkModeIsActivate}/>
    </div>
  );
}

export default App;
