import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {

    const [products, setProducts] = useState([]); //guardar la informacion que llamamos mediante useEffects
    useEffect ( async() =>{
        // construir las peticiones
        const response = await axios(API);
        setProducts(response.data);

    }, [] );
    return products;

}
export default useGetProducts;

    