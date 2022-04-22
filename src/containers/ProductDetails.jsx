import React from 'react';
import '@styles/ProductDetails.scss';
import addCart from '@icons/bt_add_to_cart.svg';
import close from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo';

const ProductDetails = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={close} alt="close"/>
            </div>
            <ProductInfo/>
           
        </aside>
    );
}

export default ProductDetails;