import React, { useState, useEffect } from 'react';

const ItemCount = ({ onAdd, stock, initial }) => {

    stock = 10

    const [actualStock, SetStock] = useState(stock)

    initial = () => {
        if (actualStock > 0) {
            return 1
        } else {
            return 0
        }
    }

    const [count, SetCount] = useState(initial)

    useEffect(() => { console.log(`El stock actual es ${actualStock}`) }, [actualStock])

    const sumar = () => {
        if (count < actualStock) {

            SetCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {

            SetCount(count - 1)
        }
    }

    onAdd = () => {
        if (actualStock > 0) {
            SetStock(actualStock - count)
            if (actualStock - count < count) {
                SetCount(actualStock - count)
            }
            console.log(`${count} items agregados`)
        } else {
            SetCount(0)
        }
    }

    return (
        <div style={{ marginLeft: '1.5vw' }}>
            <div style={{ display: 'flex', marginLeft: '0.2vw' }}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button disabled={(!count)} onClick={onAdd}>Agregar</button>
        </div>
    )
}

export default ItemCount