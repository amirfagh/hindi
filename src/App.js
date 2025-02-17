import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_naeq6hx', // Replace with your Service ID
        'template_bu6g1hq', // Replace with your Template ID
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        'mNn0OqkJvOYhrl3gX' // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send your message. Please try again.');
        }
      );
  };

  return (
    <Router>
      <Header />
      <div id='header' className="content">
        <div className='main-page-content'>
          <div className='main-page-content-header'>
            <p>مكتب المحامي محمد هندي</p>
            <p>מוחמד הנדי משרד עורכי דין</p>
          </div>
          <div className='main-page-content-footer'>
            
          </div>
        </div>
        <Page1 />
        <Page2 />
        <div id='contact-us' className='contact-us-section'>
          <div className='contact-us-section-header'>
            <h1>- للأستشارة الاولية -</h1>
            <h2>تواصل معنا</h2>
          </div>
          <form className='contact-us-section-content' onSubmit={sendEmail}>
            <div className='content-client-infoInput'>
              <input
                type='text'
                name='name'
                placeholder='الاسم الكامل'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type='number'
                name='phone'
                placeholder='رقم الهاتف'
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='content-client-msgInput'>
              <input
                name='message'
                placeholder='اكتب رسالتك هنا'
                value={formData.message}
                onChange={handleInputChange}
                
              />
            
            </div>
            <div className='send-button'>
              <button type='submit'>ارسال</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
