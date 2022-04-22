import React from 'react';
import '@styles/HeaderMobile.scss';

const HeaderMobile = () => {
    return (
        <div className="mobile-menu">
            <div className="content">
                <ul>
                    <li>
                        <a href="/">CATEGORIES</a>
                    </li>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="/">My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <a href="/" className="email">platzi@example.com</a>
                </li>
                <li>
                    <a href="/" className="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMobile;