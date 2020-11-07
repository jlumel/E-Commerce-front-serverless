import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import products from '../productos.json'


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState(null)

    const getItems = () => new Promise(res => {
        setTimeout(() => {
            res(products)
        }, 2000)
    })

    useEffect(() => {
        getItems().then(res => {
            setItems(res)
        })
    },[])

    return (
        <>
            <h2 style={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '3vw' }}>{title}</h2>
            {items && <ItemList items={items} />}
            
        </>
    )

}

export default ItemListContainer