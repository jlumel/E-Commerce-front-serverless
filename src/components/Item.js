import React from 'react'
import './Item.css'
import ItemCount from './ItemCount'



const Item = ({ item, onAdd, stock, initial }) => {

    return (
        <div className={'itemCard'}>

            <h2>{item.nombre}</h2>
            <div className={'itemImg'}><img src={item.img} alt=""/></div>
            <button className={'verMas'}>Ver +</button>
            <p>${item.precio}</p>
            <ItemCount onAdd={onAdd} initial={initial} stock={stock} />
            
        </div>
    )
}

export default Item