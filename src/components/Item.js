import React from 'react'
import './Item.css'



const Item = ({ item }) => {

    console.log({ item })

    return (
        <div className={'itemCard'}>

            <h2>{item.nombre}</h2>
            <img src={item.img} alt=""/>
            <p>${item.precio}</p>

        </div>
    )
}

export default Item