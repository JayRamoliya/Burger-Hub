import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BurgerMenu.css'



const BurgerMenu = ({ burgers }) => {
    const navigate = useNavigate();

    const handleBurgerClick = (burger) => {
        console.log(burger);
        localStorage.setItem('selectedBurger', JSON.stringify(burger));
        navigate(`/build/${burger.id}`);
    };

    return (
        <div class="burger-menu">
            <div class="menu-grid">
                {burgers.map((burger) => (
                    <div class="burger-card" key={burger.id} onClick={() => handleBurgerClick(burger)}>
                        <img src={burger.image} alt={burger.name}/>
                            <h3>{burger.name}</h3>
                            <p>${burger.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BurgerMenu;
