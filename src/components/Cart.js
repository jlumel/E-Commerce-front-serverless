import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import './Cart.css'

const Cart = () => {

    const { remove, clear, cart } = useCartContext()

    const [total, setTotal] = useState(0)

    const getTotal = () => {
        let suma = 0
        cart.forEach(producto => {
            suma += producto.quantity * producto.item.precio
            setTotal(suma)
        });
    }

    const items = cart.length ? cart.map(producto => 
    <>
    <li className={'itemCart'} key={producto.item.id}>
        <img src={producto.item.img} alt={producto.item.name}></img>
        <p id={'itemNombre'}>{`${producto.item.nombre}`}</p>
        <p id={'itemCantidad'}>{`Cantidad: ${producto.quantity}`}</p>
        <p>{`Subtotal: $${producto.quantity * producto.item.precio}`}</p>
    <button className={'btnEliminar'} onClick={() => remove(producto.item.id)}>Eliminar</button>
    </li>
    </>) 
    : null

    useEffect(() => {
        getTotal()
    })

    return (
        <>
            <h2 className={'title'}>Tu Carrito</h2>
            {items &&
                <div className={'carritoContainer'}>

                    <ul className={'listCarrito'}>
                        {items}
                    </ul>
                    <p className={'cartTotal'}>Total: ${total}</p>
                    <button className={'btnComprar'}>Finalizar Compra</button>
                    <Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Seguir comprando</button></Link>
                    <button onClick={() => clear()} className={'vaciarCarrito'}>Vaciar Carrito</button>
                </div>
            }
            {!items &&
                <div className={'carritoContainer'}>
                    <div className={'listCarrito'}>
                        <p className={'carritoVacio'}>No hay productos</p>
                        <Link to="/"><button className={'backToList'}>Volver al listado de productos</button></Link>
                    </div>
                </div>}
        </>
    )
}

export default Cart