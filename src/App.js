import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import WelcomeForm from './components/WelcomeForm';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  console.log("Rendering App");

  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Routes>
            <Route path="/get-started" element={<WelcomeForm />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;

window.React1 = require('react');

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);