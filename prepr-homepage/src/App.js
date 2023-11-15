import React, {useState} from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";

const ALL_CONTENT = [
  {
      id: 1,
      host: 'prepr',
      category: 'labs',
      title: 'Prepr Care Lab',
      description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
      tags: ['communication', 'mindfullness', 'writing']

  },
  {
      id: 2,
      host: 'prepr',
      category: 'challenges',
      title: 'Getting Started Lab for Employement',
      description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
      tags: ['communication', 'mindfullness', 'writing']

  },
  {
      id: 3,
      host: 'youth',
      category: 'projects',
      title: 'UX Feedback Lab',
      description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
      tags: ['communication', 'mindfullness', 'writing']

  },
  {
      id: 4,
      host: 'youth',
      category: 'labs',
      title: 'UX Feedback Lab',
      description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
      tags: ['communication', 'mindfullness', 'writing']

  },
  {
      id: 5,
      host: 'youth',
      category: 'challenges',
      title: 'Database Design for Data Analitics',
      description: 'Welcome to the CARE Lab, a space to collaborate and communicate ideas, resources, best practices, and awareness to help manage stress, relieve anxiety, and carry our collective burdens together. Participants are invited to share stories and resources while creating a safe space for everyone to share and learn from each other. Contributors are invited to host events and webinars that can be made ac...',
      tags: ['communication', 'mindfullness', 'writing']

  }
]

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
