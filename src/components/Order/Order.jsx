import React from 'react';
import './Order.css'
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const selectedBurger = JSON.parse(localStorage.getItem('selectedBurger'));

    if (!selectedBurger) {
        return <h1 className='noorder'>No order found</h1>;
    }

    const { name, description, ingredients, price, image } = selectedBurger;

    // Calculate the total price for the burger based on the selected ingredients
    const totalPrice = ingredients.reduce(
        (total, ing) => total + ing.price * ing.quantity,
        price
    );

    const navigate = useNavigate();

    const confirmOrder = () => {
        navigate('/');
    };
    return (
        <div className="order-confirmation">
            <div className="order-details">
                <h1>Your Order</h1>
                <div className="burger-info">
                    <img src={image} alt={name} className="burger-image" />
                    <div className="burger-text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <h3>Price: ${price.toFixed(2)}</h3>
                    </div>
                </div>

                <div className="ingredients-summary">
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredients
                            .filter(ing => ing.quantity > 0)
                            .map(ing => (
                                <li key={ing.name}>
                                    {ing.name}: {ing.quantity} x ${ing.price}
                                </li>
                            ))}
                    </ul>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                </div>

                <div className="confirmation-footer">
                    <button onClick={confirmOrder}>Home</button>
                </div>
            </div>
        </div>
    );
};

export default Order;
