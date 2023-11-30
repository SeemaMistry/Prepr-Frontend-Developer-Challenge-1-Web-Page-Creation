import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";

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

  // reset to default values 
  const [activateDefaultSettings, setActivateResetSettings] = useState(false)

  // content scaling increase and decrease
  const [scale, setScale] = useState(100)
  const increaseScale = () => {
    if (scale < 200) {
      setScale(scale + 1)
    }
  }
  const decreaseScale = () => {
    if (scale > 0) {
      setScale(scale - 1)
    }
  }

  useEffect ( () => {
    if(scale === 0){
      setScale('none')
    }
    document.body.style.zoom = `${scale}%`

  },[scale])

  // activate reset
  const defaultReset = () => setActivateResetSettings(true)

  // reset scale to default 100
  useEffect ( () => {
    if(activateDefaultSettings){
      setScale(100)
    }
    document.body.style.zoom = `${scale}%`
    setActivateResetSettings(false) // reset to false!!
  },[activateDefaultSettings])

  return (
    <div 
    data-bs-theme={darkModeIsActivate ? 'dark' : ''} 
    style={{backgroundColor: `${bgColorDarkMode}`}}
    >
      <button className="btn btn-warning btn-lg" onClick={defaultReset}>Reset</button>
       <button className="btn btn-warning btn-lg" onClick={increaseScale}>Increase</button>
      <button className="btn btn-warning btn-lg" onClick={decreaseScale}>decrease</button>
      <Navbar activateDarkMode={darkModeIsActivate} onDarkMode={onDarkModeHandler}/>
      <HeroSection activateDarkMode={darkModeIsActivate}/>
      <CoursesSection onChange={onChangeHandler} filteredCourses={filteredCourses} state={selectedContent} activateDarkMode={darkModeIsActivate}/>
    </div>
  );
}

export default App;
