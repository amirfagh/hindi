import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
        
          <li><Link to="/" className="nav-link">المحامي محمد هندي</Link></li>
          <li><Link to="/page2" className="nav-link">مجالات تخصصنا</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
