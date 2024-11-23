import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          
          <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={<Page1 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
