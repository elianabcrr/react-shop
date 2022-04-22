import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/DesktopMenu';
import menu from '@icons/icon_menu.svg';
import logoSite from '@logos/f5c1d07e0dba17246363.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';
import ShoppingCart from '@containers/ShoppingCart';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state} = useContext(AppContext);


	const handleToggle = () =>{
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logoSite} alt="logo" className="nav-logo" />
				<ul>
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
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>

					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>

					<li className="navbar-shopping-cart" onClick={ () => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCartIcon} alt="shopping cart" />
						{ state.cart.length > 0 ? <div> { state.cart.length } </div> : null }
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrders && <ShoppingCart/>}
			
		</nav>
	);
}

export default Header;
