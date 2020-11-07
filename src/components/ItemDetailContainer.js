import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import items from '../productos.json'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [actualStock, setStock] = useState(0)

    const [initial, setInitial] = useState(0)

    const { id } = useParams()

    const getItem = (id) => new Promise(res => {
        setTimeout(() => {
            res(items.filter(item => item.id === Number(id))[0])
        }, 2000)
    })

    const onAdd = (count, setCount) => {
        if (actualStock > 0) {
            setStock(actualStock - count)
            if (actualStock - count < count) {
                setCount(actualStock - count)
            }
            console.log(`${count} items agregados`)
        } else {
            setCount(0)
        }
    }

    useEffect(() => {
        getItem(id).then(res => {
            setInitial(1)
            setItem(res)
            setStock(res.stock)
            if (res.stock > 0) {
                setInitial(1)
            }
        }
        )
    }, [id])

    useEffect(() => {
        actualStock ? console.log(`El stock actual es ${actualStock}`) : console.log('Loading')
    }, [actualStock])

    return (
        <>
            {item && initial && actualStock && <ItemDetail item={item} onAdd={onAdd} initial={initial} stock={actualStock} />}
            {item && !actualStock && <ItemDetail item={item} onAdd={onAdd} initial={0} stock={actualStock} />}
        </>
    )

}

export default ItemDetailContainer