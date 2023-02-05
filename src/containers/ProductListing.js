import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const product = useSelector( (state) => state);
    // console.log(products);

    const dispatch = useDispatch();

    const getProducts = async () => {
        const res = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => console.log("Err", err));

        dispatch(setProducts(res.data));
    }

    useEffect( () => {
        getProducts();
    }, []);

    console.log("Products: ", product);
    return (
        <div>
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;