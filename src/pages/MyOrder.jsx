import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

const MyOrder = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My order</h1>
                <div className="my-order-content">
                    <div className="order">
                        <p>
                            <span>04.25.21</span>
                            <span>6 articles</span>
                        </p>
                        <p>$560.00</p>
                    </div>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                    <OrderItem/>
                </div>
            </div>
        </div>
    );
}

export default MyOrder;