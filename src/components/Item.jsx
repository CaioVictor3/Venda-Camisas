function Item ({ item, selectProduct, changeQuantity }) {

    return (
        <div 
            onClick={selectProduct} 
            className={`product ${item.isInBag ? 'selected' : ''}`}
        >
            <div className="photo">
                <img src={"./img/" + item.photo} alt={item.name} />
            </div>
            <div className="description">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
                {item.isInBag && (
                    <div className="quantity-area">
                        <button 
                            onClick={(e) => changeQuantity(e, -1)} 
                            aria-label="Decrease quantity"
                        >-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                            onClick={(e) => changeQuantity(e, 1)} 
                            aria-label="Increase quantity"
                        >+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Item;
