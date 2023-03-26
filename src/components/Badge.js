import React from 'react';
import '../css/Badge.css'

function Badge() {
  return (
    <div className="Badge">
    <img src='./images/pfp_badge.png'></img>
      <div className='badge-info'>
        <h1>Scott "Marble" Nideffer</h1>
        <h2>Full Stack Developer</h2>
        <h3>icons go here</h3>
      </div>
      <div className='badge-links'>
        <p>download resume</p>
        <p>contact me</p>
      </div>
    </div>

  );
}

export default Badge;