import React from 'react';
import '@styles/ProductDetails.scss';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductDetails = () => {
    return (
        <>
            <img src="https://images.pexels.com/photos/5101410/pexels-photo-5101410.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="product-info">
                <p>$35.00</p>
                <p>Cake</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis labore non voluptate dolores exercitationem corporis consectetur enim illo ipsam ipsa quasi autem repellendus, magnam excepturi possimus cum sequi aut dolorem.</p>
                <button className="primary-button add-to-cart-button">
                    <img src={addCart} alt="add to cart"/>
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductDetails;