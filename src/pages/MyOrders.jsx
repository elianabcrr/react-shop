import React from 'react';
import Order from '@components/Order';
import '@styles/MyOrders.scss';

const MyOrders = () => {
    return (
        <div className="my-orders">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>
                <div className="my-order-content">
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                    <Order/>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;