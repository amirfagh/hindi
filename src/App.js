import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
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
                <p>www.hindi.com</p>
            </div>
        </div>
          <Page1></Page1>
          <Page2></Page2>
          <div id='contact-us' className='contact-us-section'>
              <div className='contact-us-section-header'>
                <h1>- للأستشارة الاولية -</h1>
                <h2>تواصل معنا</h2>
              </div>
              <div className='contact-us-section-content'>
                <div className='content-client-infoInput'>
                    <input type='number' placeholder='رقم الهاتف'/>
                    <input type='String' placeholder='الاسم الكامل'/>
                </div>
                <div className='content-client-msgInput'>
                    <input type='Email' placeholder='البريد الألكتروني'/>
                </div>
                <div className='send-button'>
                   <button>ارسال</button>
                </div>
              </div>
          </div>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
