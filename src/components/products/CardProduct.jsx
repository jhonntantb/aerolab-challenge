import React from 'react'
import "./CardProduct.css"
import buy from "./buy-blue.svg"

function CardProduct({image,name,category,cost}) {
    return (
        <div className="card">
            <button className="buyBtn">
                <img src={buy} alt="" />
            </button>
            <div className="image">
            <img className="imgProduct" src={image} alt="no fount" />
            </div>
            <p>{name}</p>
            <p>{category}</p>
            <p>{cost}</p>
            
        </div>
    )
}

export default CardProduct
