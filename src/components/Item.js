import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'



const Item = ({ item }) => {

    return (
        <Link className={'itemCard'} to={`/item/${item.id}`} >

            <h2>{item.nombre}</h2>
            <div className={'itemImg'}><img src={item.img} alt={item.nombre} /></div>
            <p>${item.precio}</p>

        </Link>
    )
}

export default Item