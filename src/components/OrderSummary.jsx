const OrderSummary = ({ ingredients, confirmOrder, totalPrice }) => {

    const orderDetails = ingredients
        .filter((ing) => ing.quantity > 0)
        .map((ing) => (
            <li key={ing.name}>
                {ing.name} x {ing.quantity} = ${(ing.price * ing.quantity).toFixed(2)}
            </li>
        ));
        
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <ul>{orderDetails}</ul>
            <h3>Total: ${totalPrice}</h3>
            <button onClick={confirmOrder}>Place Order</button>
        </div>
    );
};

export default OrderSummary;
