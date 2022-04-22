import React from 'react';

import '@styles/DesktopMenu.scss';
const DesktopMenu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>
                <li>
                    <a href="/" className="">My account</a>
                </li>
                <li>
                    <a href="/" className="">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default DesktopMenu;