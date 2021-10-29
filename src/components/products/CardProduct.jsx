import React from 'react'
import "./CardProduct.css"
import buy from "./buy-blue.svg"

function CardProduct({image,name,category,cost}) {
    return (
        <div className="card">
            <div className="image">
            <img src={image} alt="no fount" />
            <button>
                <img src={buy} alt="" />
            </button>
            </div>
            <p>{name}</p>
            <p>{category}</p>
            <p>{cost}</p>
            
        </div>
    )
}

export default CardProduct
