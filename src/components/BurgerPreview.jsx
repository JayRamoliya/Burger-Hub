const BurgerPreview = ({ ingredients }) => {
    const renderLayers = () =>
        ingredients.map((ing) =>
            Array.from({ length: ing.quantity }, (_, i) => (
                <div key={`${ing.name}-${i}`} className={`layer ${ing.name.toLowerCase()}`}>
                    {ing.name}
                </div>
            ))
        );

    return (
        <div className="burger-preview">
            <div className="bun top">Top Bun</div>
            {renderLayers()}
            <div className="bun bottom">Bottom Bun</div>
        </div>
    );
};

export default BurgerPreview;
