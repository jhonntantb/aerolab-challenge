import React from 'react'
import "./CardProduct.css"
import buy from "./buy-blue.svg"

function CardProduct({image,name,category,cost}) {
    return (
        <div className="card">
            <div className="image">
                <div className="buyBtn">
                    <button>
                        <img src={buy} alt="Not found" />
                    </button>
                </div>
                <img className="imgProduct" src={image} alt="Not found" />
            </div>
            <p>{name}</p>
            <p>{category}</p>  
        </div>
    )
}

export default CardProduct
