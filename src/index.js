import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Salary, Housing, RentvBuy, Fire, Error } from './pages';
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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
