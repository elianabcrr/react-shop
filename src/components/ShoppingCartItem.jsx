import React, {useContext} from 'react';
import '@styles/ShoppingCartItem.scss';
import  iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const ShoppingCartItem = ({product}) => {

	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="ShoppingItem">
			<figure>
				<img src={product.images[0]} alt={product.title}/>
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} onClick={ () => handleRemove(product)} alt="close" />
		</div>
	);
}

export default ShoppingCartItem;
