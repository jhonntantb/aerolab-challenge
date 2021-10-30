import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions';
import CardProduct from './CardProduct';
import "./ProductsList.css"

function ProductsList() {
    const dispatch = useDispatch();

    const [productsView,setProductsView]=useState([])
    const [cardPerPage,setCardPerPage]=useState(16)
    const [currentPage,setCurrentPage]=useState(1)
    const [sortPrice,setSortPrice]=useState("")

    const products=useSelector(state=>state.products)
    const total=products.length
    useEffect(() => {
       dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        products.length>0&&setProductsView(products)
    }, [products])

    if(sortPrice.length>0){
        if(sortPrice==="increment"){
            const orderProducts=products.sort((a,b)=>a.cost-b.cost)
        }
        if(sortPrice==="decrement"){
            const orderProducts=products.sort((a,b)=>b.cost-a.cost)
        }
        if(sortPrice==="mostRecent"){
            dispatch(getAllProducts())
        }
        
    }

    const handleSortPrice=(e)=>{
        setSortPrice(e.target.value)
    }
    const indexOfLastItem=currentPage*cardPerPage;//16
    const indexOfFirstItem=indexOfLastItem-cardPerPage;//0
    let currentItems= productsView.slice(indexOfFirstItem,indexOfLastItem);

    return (
        <div>
            <div className="sort">
                <p>{"16 of "}{total} products</p>
                <p>|</p>
                <p>Sort by:</p>
                <button value="mostRecent" onClick={e=>handleSortPrice(e)} >Most recent</button>
                <button value="increment" onClick={e=>handleSortPrice(e)} >Lowets price</button>
                <button value="decrement" onClick={e=>handleSortPrice(e)} >Highest price</button>
            </div>
            <div className="productList">
            {productsView.length>0&&currentItems.map(e=><CardProduct 
            image={e.img.url}  
            name={e.name} 
            cost={e.cost} 
            category={e.category} />)}
            </div>
        </div>
    )
}

export default ProductsList
