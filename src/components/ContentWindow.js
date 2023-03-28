import React from 'react';
import '../css/ContentWindow.css'

function ContentWindow() {
  return (
    <div className='ContentWindow'>
      <p className='about'>I am Scott "Marble" Nideffer. I've worn many hats over the years. Artist, Delivery 
Driver, Custodian, Support Player, Home Chef,</p>
      <p className='standalone'>Full Stack Developer</p>
      <p className='about'>I am currently residing in <span style={{color: 'green'}}>Eugene</span> , Oregon. I recently graduated from a coding boot camp, and am actively pursuing additional certifications. 
      Are you looking to have a website built?
      Let's Talk!
      </p>
      <p className='skills'><span style={{color: '#A77DFF'}}>My</span> Skills:</p>
      <p className='skills-icons'>Skills icons go here</p>
    </div>
  );
}

export default ContentWindow;