import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ title, stock}) => {

    stock = 10

    return (
        <>
            <h2 style={{ fontFamily: 'Roboto', marginLeft: '0.5vw' }}>{title}</h2>
            <ItemCount stock={stock}/>
        </>
    )

}

export default ItemListContainer