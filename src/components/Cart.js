import React from 'react'
import { useCartContext } from '../context/cartContext'

const Cart = () => {

    const { remove, clear, cart } = useCartContext()

    const items = cart.map(producto => <li key={producto.item.id}>{`Producto: ${producto.item.nombre} Cantidad: ${producto.quantity}`}</li>)

    return (
        <>
            <h2>Carrito</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default Cart