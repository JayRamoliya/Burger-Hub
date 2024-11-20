const IngredientSelector = ({ ingredients, addIngredient, removeIngredient }) => (
    <div className="ingredient-selector">
        <h2>Customize Your Burger</h2>
        {ingredients.map((ing) => (
            <div key={ing.name} className="ingredient">
                <span>{ing.name} (${ing.price})</span>
                <div>
                    <button onClick={() => addIngredient(ing.name)}>Add</button>
                    <button onClick={() => removeIngredient(ing.name)}>Remove</button>
                </div>
            </div>
        ))}
    </div>
);

export default IngredientSelector;
