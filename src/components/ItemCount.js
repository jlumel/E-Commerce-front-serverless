import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ onAdd, stock, initial, item}) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {

            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {

            setCount(count - 1)
        }
    }

    return (
        <div className={'addContainer'}>
            <div className={'counterContainer'}>
                <button className={'counterbtn'} onClick={restar}> - </button>
                <p>{count}</p>
                <button className={'counterbtn'} onClick={sumar}> + </button>
            </div>
            <button className={'addbtn'} disabled={stock < 1} onClick={() => onAdd(item,count)} >{stock > 0 ? 'Agregar' : 'Sin stock'} </button>
        </div>
    )
}

export default ItemCount