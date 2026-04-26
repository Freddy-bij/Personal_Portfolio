

import { useLocation } from 'react-router';
import SectAbout from './SectAbout'
import SectContact from './SectContact'
import SectSkills from './SectSkills'
import { useEffect } from 'react';
import ProjectsSect from './ProjectsSect';
import SectExperience from './SectExperience';


const PrensentationSec = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); 
      const element = document.getElementById(elementId);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div >
      <SectAbout/>
      <ProjectsSect/>
      <SectExperience/>
      <SectSkills/>
      <SectContact/>
    </div>
  )
}

export default PrensentationSec