function adjustLayout() {
    const activeProjectDetails = document.querySelector('.project-details-active');
  
    if (activeProjectDetails) {   
      document.body.style.overflow = 'hidden'; 
      document.querySelector('#projects').style.height = '100vh';
  
    } 
    else { 
      document.body.style.overflow = ''; 
      document.querySelector('#projects').style.height = ''; 
    }
  }
  