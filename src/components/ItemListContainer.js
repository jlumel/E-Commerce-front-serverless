import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import products from '../productos.json'


const ItemListContainer = ({ title }) => {

    const [items, setItems] = useState(null)

    const getItems = () => new Promise(res => {
     
            res(products)
   
    })

    useEffect(() => {
        getItems().then(res => {
            setItems(res)
        })
    },[])

    return (
        <>
            <h2 className={'title'}>{title}</h2>
            {items && <ItemList items={items} />}
            
        </>
    )

}

export default ItemListContainer