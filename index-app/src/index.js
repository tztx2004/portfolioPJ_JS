import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './Main';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

