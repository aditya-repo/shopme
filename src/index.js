import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='login' element={<App />} />
        <Route path='register' element={<App />} />
        <Route path='forgot-pass' element={<App />} />
        <Route path=':category' element={<App />}>
          <Route path=':product' element={<App />} />
        </Route>
        <Route path='account' element={<App />}>
          <Route path='profile' element={<App />} />
          <Route path='logout' element={<App />} />
          <Route path='order' element={<App />}>
            <Route path=':orderid' element={<App />} />
          </Route>
        </Route>
        <Route path='viewcart' element={<App />} />
      </Routes>
    </BrowserRouter>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
