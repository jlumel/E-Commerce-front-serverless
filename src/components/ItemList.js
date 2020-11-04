import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({ items, onAdd, initial, stock }) => {

    return (
        <div className={'itemList'}>
            {items.map(item => <Item item={item} key={item.id} onAdd={onAdd} initial={initial} stock={stock} />)}
        </div>
    )
}

export default ItemList