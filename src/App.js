import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Manual from './pages/Manual';
import GetStarted from './pages/GetStarted';
import Developer from './pages/Developer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Manual" element={<Manual />} />
            <Route path="/GetStarted" element={<GetStarted />} />
            <Route path="/Developer" element={<Developer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
