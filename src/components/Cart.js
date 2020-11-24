import React, { useEffect, useState } from 'react'
import CartItems from './CartItems'
import Order from './Order'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import './Cart.css'

const Cart = () => {

    const { clear, cart } = useCartContext()

    const [total, setTotal] = useState(0)

    const [order, setOrder] = useState(false)

    const getTotal = () => {
        let suma = 0
        cart.forEach(producto => {
            suma += producto.quantity * producto.item.precio
            setTotal(suma)
        });
    }

    useEffect(() => {
        getTotal()
    })

    return (
        <>
            <h2 className={'title'}>Tu Carrito</h2>
            {cart.length > 0 &&
                <div className={'carritoContainer'}>

                    <ul className={'listCarrito'}>
                        <CartItems />
                    </ul>
                    <button onClick={() => clear()} className={'vaciarCarrito'}>Vaciar Carrito</button>
                    <p className={'cartTotal'}>Total: ${total}</p>
                    <Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Seguir comprando</button></Link>
                    {!order && <button onClick={()=>{setOrder(true)}} className={'btnComprar'}>Finalizar Compra</button>}
                    {order && <Order total={total}/>}
                </div>
            }
            {!cart.length &&
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