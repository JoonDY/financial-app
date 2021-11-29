import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Salary from './pages/Salary';
import Housing from './pages/Housing';
import Fire from './pages/Fire';
import Rentvbuy from './pages/Rentvbuy';
import Error from './pages/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="salary" element={<Salary />} />
          <Route path="housing" element={<Housing />} />
          <Route path="fire" element={<Fire />} />
          <Route path="rentvbuy" element={<Rentvbuy />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
