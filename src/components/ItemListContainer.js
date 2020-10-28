import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

//const itemTask = new Promise()//promise que devuelva items

const ItemListContainer = ({ title }) => {

    const stock = 10 //hardcodeo el stock hasta que lo consumamos de una API

    const [actualStock, setStock] = useState(stock)

    const initial = () => {
        if (actualStock > 0) {
            return 1
        } else {
            return 0
        }
    }

    const onAdd = (count) => {
        if (actualStock > 0) {
            setStock(actualStock - count)
            // if (actualStock - count < count) {
            //     setCount(actualStock - count)
            // }
            console.log(`${count} items agregados`)
        // } else {
        //     setCount(0)

         }
    }

    useEffect(() => { console.log(`El stock actual es ${actualStock}`) }, [actualStock])

    return (
        <>
            <h2 style={{ fontFamily: 'Roboto', marginLeft: '0.5vw' }}>{title}</h2>
            <ItemCount onAdd={onAdd}  min={initial} max={actualStock} />
        </>
    )

}

export default ItemListContainer