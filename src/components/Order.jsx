import React from 'react';
import '@styles/Order.scss';
import flec from '@icons/flechita.svg';

const order = () => {
    return (
        <div className="order my-order-item">
            <p>
                <span>04.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={flec} alt=""/>
        </div>
    );
}

export default order;