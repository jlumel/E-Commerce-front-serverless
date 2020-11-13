import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import items from '../productos.json'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()

    const getItem = (id) => new Promise(res => {
        setTimeout(() => {
            res(items.find(item => item.id === Number(id)))
        }, 2000)
    })
    
    useEffect(() => {
        getItem(id).then(res => {
            setItem(res)
        }
        )
    }, [id])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )

}

export default ItemDetailContainer