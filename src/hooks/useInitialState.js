//custom hook

// agregar al carrito y se ejecute esta accion, es decir agregar productos al carrito

import { useState } from "react";

const initialState = { //objeto con la informacion que tenemos (initialstate base)
    cart: [],
}

const useInitialState = () => {
    //llamado de valor del estado inicializandose con el valor que se le pasa
    const [state, setState] = useState(initialState);

    // funcion para cambiar o agregar valores al elemento
    const addToCart = (payload) => { //payload es el valor que recibe, este nombre es el que se encuentra comunmente
        setState({
            
            ...state, //manten lo que este en el estado
            cart: [...state.cart, payload] // y a cart agregue lo que no este 
        });
    };
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        });
    }
    
    return {
        state,
        addToCart,
        removeFromCart
    }
    
}


export default useInitialState;