import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BurgerCustomization.css'

const BurgerCustomization = () => {
    const { burgerId } = useParams();
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
        <div className="burger-customization">
            <h1>Customize Your {selectedBurger.name}</h1>
            <div className="ingredients">
                {ingredients.map((ing) => (
                    <div key={ing.name} className="ingredient">
                        <span>
                            {ing.name}(${ing.price}) <br /> <b>Quantity</b> {ing.quantity}
                        </span>
                        <div>
                            <button onClick={() => addIngredient(ing.name)}>Add</button>
                            <button onClick={() => removeIngredient(ing.name)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="summary">
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <button onClick={confirmOrder}>Confirm Order</button>
            </div>
        </div>
    );
};

export default BurgerCustomization;
