import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ item, onAdd, initial, stock }) => {
    console.log(item)
    return (
        <div className={'detailContainer'}>
            <div className={'detailText'}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem consectetur natus assumenda sunt repellendus mollitia, quidem minus ad, corrupti ipsa ipsum vel suscipit aliquam beatae dolores rerum, molestias cupiditate?</p>
            </div>
            <div className={'itemDetailCard'}>

                <h2>{item.nombre}</h2>
                <div className={'itemDetailImg'}><img src={item.img} alt="" /></div>
                <p>${item.precio}</p>
                <ItemCount onAdd={onAdd} initial={initial} stock={stock} />

            </div>

        </div>
    )
}

export default ItemDetail