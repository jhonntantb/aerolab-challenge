import React from 'react'

function CardProduct({image,name,category,cost}) {
    return (
        <div>
            <img src={image} alt="no fount" />
            <p>{name}</p>
            <p>{category}</p>
            <p>{cost}</p>
            
        </div>
    )
}

export default CardProduct
