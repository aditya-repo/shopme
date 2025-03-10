import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import ProductList from './pages/productlist';
import Navigation from './_comp/navigation';
// import SignupPage from './pages/register';
import VerifyPage from './pages/verify';
import AccountPage from './pages/account';
import OrderPage from './pages/order';
import WishlistPage from './pages/wishlist';
import OrderIdPage from './pages/orderid';
import ViewCartPage from './pages/viewcart';
import { CartProvider } from './config/context';
import HomePage from './pages/home';
import LoginPages from './pages/login';
import ProtectedRoute from './config/protectedRoutes';
import { AuthProvider } from './config/authcontext';
import RegisterPage from './pages/new-user';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        { /*<Route element={<Navigation />} /> */}
          <Route path='/' element={<HomePage />} />
          <Route path="login" element={<LoginPages />} />
          <Route path="verify" element={<VerifyPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="products" element={<ProductList />} />
          <Route path=":category/:id" element={<Product />} />

          <Route element={<ProtectedRoute />}>
            <Route path="order" element={<OrderPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="order/:orderid" element={<OrderIdPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="logout" element={<App />} />
          </Route>

          <Route path="cart" element={<ViewCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <Main />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
