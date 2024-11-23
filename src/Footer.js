import React from 'react';
import './Footer.css';
import { FaWhatsapp, FaFacebook, FaPhone } from 'react-icons/fa'; // Font Awesome icons

function Footer() {
  return (
    <footer className="footer">
      <p>
        <span className="footer-icon"><FaPhone />  </span>
         <a href="tel:0542840460" className="footer-link">  0542840460  </a>
      </p>
      <p>
        <span className="footer-icon"><FaWhatsapp /></span>
        <a href="https://wa.me/+972542840460" target="_blank" rel="noopener noreferrer" className="footer-link">0542840460</a>
      </p>
      <p>العنوان: شارع ابن سينا 5 ، القدس</p>
      <p>ساعات الدوام: السبت – الخميس 8:00 – 16:00</p>
      <p>
        <span className="footer-icon"><FaFacebook /></span>
        <a href="https://www.facebook.com/profile.php?id=100035421326414&mibextid=9R9pXO" target="_blank" rel="noopener noreferrer" className="footer-link">
         لصفحة الفيسبوك
        </a>
      </p>
    </footer>
  );
}

export default Footer;
