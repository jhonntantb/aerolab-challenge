import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions';
import CardProduct from './CardProduct';

function ProductsList() {
    const dispatch = useDispatch();

    const [productsView,setProductsView]=useState([])
    const [cardsPerPage,setCardsPerPage]=useState(16)

    const products=useSelector(state=>state.products)
    useEffect(() => {
       dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        products.length>0&&setProductsView(products)
    }, [products])
    return (
        <div>
            <div>

            </div>
            <div>
            {productsView.length>0&&productsView.map(e=><CardProduct 
            image={e.img.url}  
            name={e.name} 
            cost={e.cost} 
            category={e.category} />)}
            </div>
        </div>
    )
}

export default ProductsList
