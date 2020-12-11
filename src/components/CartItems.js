import React from 'react'
import { useCartContext } from '../context/cartContext'
import './Cart.css'

const CartItems = ({edit}) => {

    const { remove, cart } = useCartContext()

    return (
        <>
            {
                cart.length && cart.map(producto =>
                    <li className={'itemCart'} key={producto.item.id}>
                        <img src={`img/${producto.item.img}`} alt={producto.item.nombre}></img>
                        <p id={'itemNombre'}>{`${producto.item.nombre}`}</p>
                        <p id={edit ? 'itemCantidad': 'itemCantidadCheckout'}>{`Cantidad: ${producto.quantity}`}</p>
                        <p>{`Subtotal: $${producto.quantity * producto.item.precio}`}</p>
                        {edit && <button className={'btnEliminar'} onClick={() => remove(producto.item.id)}>Eliminar</button>}
                    </li>
                )
            }
        </>
    )

}

export default CartItems




