import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu';
import BurgerCustomization from './components/BurgerCustomization';
import BuildYourBurger from './components/BuildYourBurger/BuildYourBurger';
import Order from './components/Order/Order';
import Nav from './components/Navbar/Nav';

import burgers from './burgerData'; 
const App = () => {

  return (
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<BurgerMenu burgers={burgers} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/buildyourburger" element={<BuildYourBurger />} />
        <Route path="/customize/:burgerId" element={<BurgerCustomization />} />
        <Route path="/build/:burgerId" element={<BuildYourBurger />} />
      </Routes>
    </Router>
  );
};

export default App;
