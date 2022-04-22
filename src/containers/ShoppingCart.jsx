import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import ShoppingCartItem from '@components/ShoppingCartItem';
import '@styles/ShoppingCart.scss';
import  iconFlech from '@icons/flechita.svg';

const ShoppingCart = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

    return (
        <aside className="product-detail">
            <div className="shopping-cart">
                <div className="shopping-cart-container">
                    <img src={iconFlech} alt="row"/>
                    <h1 className="title">Shopping Cart</h1>
                </div>
                <div className="shopping-cart-content">
                    { state.cart.map( product => (

                        <ShoppingCartItem product={product} key={`shopping-cart-item-${product.id}`}/>
                    ))}
                    
                    <div className="order">
                        <p>
                            <span >Total</span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                    <button className="primary-button add-to-cart-button">Checkout</button>
                </div>
            </div>
        </aside>

    );
}

export default ShoppingCart;