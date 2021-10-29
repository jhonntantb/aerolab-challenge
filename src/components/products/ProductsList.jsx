import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions';
import CardProduct from './CardProduct';
import "./ProductsList.css"

function ProductsList() {
    const dispatch = useDispatch();

    const [productsView,setProductsView]=useState([])
    const [cardsPerPage,setCardsPerPage]=useState(16)

    const products=useSelector(state=>state.products)
    const total=products.length
    useEffect(() => {
       dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        products.length>0&&setProductsView(products)
    }, [products])
    return (
        <div>
            <div className="sort">
                <p>{"16 of "}{total} products</p>
                <p>|</p>
                <p>Sort by:</p>
                <button>Most recent</button>
                <button>Lowets price</button>
                <button>Highest price</button>
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
