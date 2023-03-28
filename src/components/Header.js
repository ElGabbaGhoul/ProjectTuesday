import React from 'react';
import '../css/Header.css'

function Header() {
  return (
    <div className='LeftHeader'>
      <ul>
        <li>
        {/* OnClick EventHandler for show about me */}
        <a href="/#/"><img src='./images/profile_icon.svg' alt='profile icon'>
        </img>
        <p>Home</p></a>
        </li>
        <li>
        {/* OnClick EventHandler for show Resume */}
        <a href="/#/section1"><img src='./images/resume_icon.svg' alt='resume icon'></img>
        <p>Resume</p></a>
        </li>
        <li>
        {/* OnClick EventHandler for show works */}
        <a href="/#/section2"><img src='./images/works_icon.svg' alt='works icon'></img>
        <p>Works</p></a>
        </li>
        <li>
        {/* OnClick EventHandler for show contact page */}
        <a href="/#/section3"><img src='./images/contact_icon.svg' alt='profile icon'></img>
        <p>Contact</p></a>
        </li>
      </ul>
    </div>
  );
}

export default Header;