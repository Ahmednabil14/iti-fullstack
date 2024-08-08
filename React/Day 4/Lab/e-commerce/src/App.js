import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/nav_bar/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./pages/register/regester";
import SingleProduct from "./pages/product/product";
import LoginPage from "./pages/login/login";
import NotFound from "./pages/not_found/not_found"
import HomePage from './pages/home/home';
import Cart from './pages/cart/cart'
import { Provider, useSelector } from 'react-redux';
import myStore from './redux/store';

function App() {

  const lang = useSelector((state) => {
    return state.lang;
  })

  const theme = useSelector((state) => {
    return state.theme
  })

  return (
      <BrowserRouter>
      <div dir={lang === "EN" ? "ltr" : "rtl"} className={`${theme === "dark" && "bg-dark text-light"} h-100`}>
        <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
