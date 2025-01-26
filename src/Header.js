import React from 'react';


import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href='#our-specialization' className="nav-link">مجالات تخصصنا</a></li>
          <li><a href='#who-are-we' className="nav-link">من نحن</a></li>
          <li><a href='#contact-us' className="nav-link">تواصل معنا</a></li>
        </ul>
        <ul id='logoUl' className="nav-links">
            <li><a href='#header' className="nav-link">مكتب المحامي محمد هندي</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
