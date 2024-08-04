import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/nav_bar/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./pages/register/regester";
import MarketPage from "./pages/market/market";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
