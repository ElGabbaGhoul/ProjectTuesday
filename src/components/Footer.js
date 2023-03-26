import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Scott Nideffer</p>
        <nav className='footer-nav'>
          <ul className='footer-ul'>
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Contact</button></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;