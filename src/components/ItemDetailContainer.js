import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ items }) => {

    const stock = 10

    const [item, setItem] = useState(null)

    const [actualStock, setStock] = useState(stock)

    const getItem = () => new Promise(res => {
        setTimeout(() => {
            console.log(items)
            res(items)
        }, 2000)
    })

    const initial = () => {
        if (actualStock > 0) {
            return 1
        } else {
            return 0
        }
    }

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
        
        getItem().then(res => {
            res.forEach((product) => {
                if (product.id === 2) {
                    setItem(product)
                }
            })
        })
    },[])

    useEffect(() => { console.log(`El stock actual es ${actualStock}`) }, [actualStock])

    return (
        <>
            {item && <ItemDetail item={item} onAdd={onAdd} initial={initial} stock={actualStock} />}

        </>
    )

}

export default ItemDetailContainer