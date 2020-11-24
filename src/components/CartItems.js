import React from 'react'
import { useCartContext } from '../context/cartContext'
import './Cart.css'

const CartItems = () => {

    const { remove, cart } = useCartContext()

    return (
        <>
            {
                cart.length && cart.map(producto =>
                    <li className={'itemCart'} key={producto.item.id}>
                        <img src={producto.item.img} alt={producto.item.name}></img>
                        <p id={'itemNombre'}>{`${producto.item.nombre}`}</p>
                        <p id={'itemCantidad'}>{`Cantidad: ${producto.quantity}`}</p>
                        <p>{`Subtotal: $${producto.quantity * producto.item.precio}`}</p>
                        <button className={'btnEliminar'} onClick={() => remove(producto.item.id)}>Eliminar</button>
                    </li>
                )
            }
        </>
    )

}

export default CartItems




