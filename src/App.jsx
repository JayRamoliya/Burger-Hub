

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu';
import BurgerCustomization from './components/BurgerCustomization';
import BuildYourBurger from './components/BuildYourBurger/BuildYourBurger';
import Order from './components/Order/Order';
import Nav from './components/Navbar/Nav';

const App = () => {

  // const burgers = [
  //   {
  //     id: 1,
  //     name: 'Raw Marbled Meat Steak',
  //     description: 'Shad angler arapaima pencilsmelt. Eggs, poached, fried, with bacon. chorizo, roasted roma tomatoes.',
  //     price: 22,
  //     image: '/src/assets/images/Beef-steak-grill-pan.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Beef Steak Grill Pan',
  //     description: 'Galjoen fish Australian lungfish sea, Shad angler arapaima pencilsmelt. Eggs, poached, with bacon.',
  //     price: 16,
  //     image: '/src/assets/images/Raw-Marbled-Meat-Steak.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cheesey Chicken',
  //     description: 'Chicken, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.',
  //     price: 16,
  //     image: '/src/assets/images/Cheesey-Chicken.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Double Burger',
  //     description: 'Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached Beef, Eggs, poached, with bacon,',
  //     price: 18,
  //     image: '/src/assets/images/Double-Burger.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Maxi Burger',
  //     description: 'Galjoen fish Australian lungfish sea, Shad angler arapaima pencilsmelt. Eggs, poached, with bacon.',
  //     price: 42,
  //     image: '/src/assets/images/Maxi-Burger.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Cheesey Chicken',
  //     description: 'Chicken, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.',
  //     price: 16,
  //     image: '/src/assets/images/Cheesey-Chicken.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Cheesey Chicken',
  //     description: 'Chicken, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.',
  //     price: 16,
  //     image: '/src/assets/images/Cheesey-Chicken.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Cheesey Chicken',
  //     description: 'Chicken, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.',
  //     price: 16,
  //     image: '/src/assets/images/Cheesey-Chicken.png',
  //   },
  // ];

  const burgers = [
    {
      id: 1,
      name: 'Raw Marbled Meat Steak',
      description: 'Shad angler arapaima pencilsmelt. Eggs, poached, fried, with bacon. Chorizo, roasted roma tomatoes.',
      price: 22.00,
      ingredients: [
        { name: 'Bacon', price: 2.00, quantity: 0 },
        { name: 'Chorizo', price: 1.50, quantity: 0 },
        { name: 'Roma Tomatoes', price: 0.80, quantity: 0 },
        { name: 'Eggs (Poached)', price: 1.20, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
      ],
      image: '/src/assets/images/raw-marbled-meat-steak.png',
    },
    {
      id: 2,
      name: 'Beef Steak Grill Pan',
      description: 'Galjoen fish, Australian lungfish, Shad angler arapaima pencilsmelt. Eggs, poached, with bacon.',
      price: 16.00,
      ingredients: [
        { name: 'Bacon', price: 2.00, quantity: 0 },
        { name: 'Eggs (Poached)', price: 1.20, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Tomato', price: 0.70, quantity: 0 },
        { name: 'Onions', price: 0.30, quantity: 0 },
      ],
      image: '/src/assets/images/beef-steak-grill-pan.png',
    },
    {
      id: 3,
      name: 'Beef Cheese Burger',
      description: 'Beef patty with cheddar cheese, onions, lettuce, and tomato.',
      price: 12.00,
      ingredients: [
        { name: 'Cheddar Cheese', price: 1.50, quantity: 0 },
        { name: 'Beef Patty', price: 4.00, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Tomato', price: 0.70, quantity: 0 },
        { name: 'Onions', price: 0.30, quantity: 0 },
        { name: 'Ketchup', price: 0.20, quantity: 0 },
      ],
      image: '/src/assets/images/beef-cheese-burger.png',
    },
    {
      id: 4,
      name: 'Chicken Burger',
      description: 'Grilled chicken breast with lettuce, tomato, and mayonnaise.',
      price: 10.50,
      ingredients: [
        { name: 'Grilled Chicken Breast', price: 3.50, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Tomato', price: 0.70, quantity: 0 },
        { name: 'Mayonnaise', price: 0.30, quantity: 0 },
      ],
      image: '/src/assets/images/chicken-burger.png',
    },
    {
      id: 5,
      name: 'Double Mac Burger',
      description: 'Two beef patties, cheddar cheese, pickles, lettuce, and special sauce.',
      price: 16.00,
      ingredients: [
        { name: 'Beef Patty', price: 4.00, quantity: 0 },
        { name: 'Cheddar Cheese', price: 1.50, quantity: 0 },
        { name: 'Pickles', price: 0.30, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Special Sauce', price: 0.80, quantity: 0 },
      ],
      image: '/src/assets/images/double-mac-burger.png',
    },
    {
      id: 6,
      name: 'Black Beef Burger',
      description: 'Black beef patty with a black bun, lettuce, tomato, and onions.',
      price: 14.00,
      ingredients: [
        { name: 'Black Beef Patty', price: 5.00, quantity: 0 },
        { name: 'Black Bun', price: 1.00, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Tomato', price: 0.70, quantity: 0 },
        { name: 'Onions', price: 0.30, quantity: 0 },
      ],
      image: '/src/assets/images/black-beef-burger.png',
    },
    {
      id: 7,
      name: 'Veggie Delight Burger',
      description: 'A vegetarian burger with black bean patty, avocado, lettuce, and tomato.',
      price: 11.50,
      ingredients: [
        { name: 'Black Bean Patty', price: 3.50, quantity: 0 },
        { name: 'Avocado', price: 1.50, quantity: 0 },
        { name: 'Lettuce', price: 0.50, quantity: 0 },
        { name: 'Tomato', price: 0.70, quantity: 0 },
        { name: 'Pickles', price: 0.30, quantity: 0 },
      ],
      image: '/src/assets/images/veggie-delight-burger.png',
    }
  ]

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
