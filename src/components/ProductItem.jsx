import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import addCartImage from '@icons/bt_add_to_cart.svg';
import AddContext from '@context/AppContext';

const ProductItem = ( {product} ) => {
   
    // const [cart, setCart] = useState([]);  //


    const { addToCart } = useContext(AddContext);
    // handleClick cuando hay un solo valor
    const handleClick = item =>{
        addToCart(item);
        
    }

    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                 
                </div>
                <figure onClick={ () => handleClick(product)}>
                    <img src={addCartImage} alt="icons add to cart"/>
                </figure>
                
            </div>
        </div>
    );
}

export default ProductItem;