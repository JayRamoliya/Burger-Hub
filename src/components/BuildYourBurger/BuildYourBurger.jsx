import React, { useEffect, useState } from 'react'

import BurgerPreview from '../BurgerPreview';
import IngredientSelector from '../IngredientSelector';
import OrderSummary from '../OrderSummary';

import './BuildYourBurger.css'
import { useNavigate } from 'react-router-dom';

const BuildYourBurger = () => {
    // const [ingredients, setIngredients] = useState([
    //     { name: 'Lettuce', price: 0.5, quantity: 0 },
    //     { name: 'Tomato', price: 0.7, quantity: 0 },
    //     { name: 'Cheese', price: 1.0, quantity: 0 },
    //     { name: 'Patty', price: 2.0, quantity: 0 },
    //     { name: 'Bacon', price: 1.5, quantity: 0 },
    // ]);

    // const addIngredient = (name) => {
    //     setIngredients((prev) =>
    //         prev.map((ing) =>
    //             ing.name === name ? { ...ing, quantity: ing.quantity + 1 } : ing
    //         )
    //     );
    // };

    // const removeIngredient = (name) => {
    //     setIngredients((prev) =>
    //         prev.map((ing) =>
    //             ing.name === name && ing.quantity > 0
    //                 ? { ...ing, quantity: ing.quantity - 1 }
    //                 : ing
    //         )
    //     );
    // };

    const selectedBurger = JSON.parse(localStorage.getItem('selectedBurger'));

    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        setIngredients(selectedBurger.ingredients)
    }, [])


    const addIngredient = (name) => {
        setIngredients((prev) =>
            prev.map((ing) =>
                ing.name === name ? { ...ing, quantity: ing.quantity + 1 } : ing
            )
        );
    };

    const removeIngredient = (name) => {
        setIngredients((prev) =>
            prev.map((ing) =>
                ing.name === name && ing.quantity > 0
                    ? { ...ing, quantity: ing.quantity - 1 }
                    : ing
            )
        );
    };

    const basePrice = selectedBurger.price || 0;
    const totalPrice = ingredients.reduce(
        (total, ing) => total + ing.price * ing.quantity,
        basePrice
    );

    const navigate = useNavigate();

    const confirmOrder = () => {
        const updatedBurger = {
            id: selectedBurger.id,
            name: selectedBurger.name,
            description: selectedBurger.description,
            price: selectedBurger.price,
            ingredients: ingredients,
            image: selectedBurger.image,
        };

        localStorage.setItem('selectedBurger', JSON.stringify(updatedBurger));
        localStorage.setItem('order', JSON.stringify(updatedBurger));

        navigate('/order');
    };

    return (
        <>
            <h1 className="burger-name">{selectedBurger.name}</h1>
            <div className="main-content">
                <BurgerPreview ingredients={ingredients} />
                <IngredientSelector
                    ingredients={ingredients}
                    addIngredient={addIngredient}
                    removeIngredient={removeIngredient}
                />
                <OrderSummary ingredients={ingredients} totalPrice={totalPrice} confirmOrder={confirmOrder} />
            </div>
        </>
    )
}

export default BuildYourBurger