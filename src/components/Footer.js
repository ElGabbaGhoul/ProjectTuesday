import React from 'react';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Golden Ghoulworks</p>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;