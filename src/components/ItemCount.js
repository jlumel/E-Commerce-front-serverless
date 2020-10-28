import React, { useState} from 'react';

const ItemCount = ({onAdd, max, min }) => {

    const [count, setCount] = useState(min)

    const sumar = () => {
        if (count < max) {

            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {

            setCount(count - 1)
        }
    }

    return (
        <div style={{ marginLeft: '1.5vw' }}>
            <div style={{ display: 'flex', marginLeft: '0.2vw' }}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
    <button disabled={max < 1} onClick={()=> onAdd(count)} >{max > 0 ? 'Agregar' : 'Sin stock'} </button>
        </div>
    )
}

export default ItemCount