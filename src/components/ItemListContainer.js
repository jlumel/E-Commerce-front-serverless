import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ title}) => {

    return (
        <>
            <h2 style={{ fontFamily: 'Roboto', marginLeft: '0.5vw' }}>{title}</h2>
            <ItemCount />
        </>
    )

}

export default ItemListContainer