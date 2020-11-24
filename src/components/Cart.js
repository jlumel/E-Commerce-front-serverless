import React from 'react'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'
import './Cart.css'

const Cart = () => {

    const { clear, cart, getTotal } = useCartContext()

    return (
        <>
            <h2 className={'title'}>Tu Carrito</h2>
            {cart.length > 0 &&
                <div className={'carritoContainer'}>

                    <ul className={'listCarrito'}>
                        <CartItems />
                    </ul>
                    <button onClick={() => clear()} className={'vaciarCarrito'}>Vaciar Carrito</button>
                    <p className={'cartTotal'}>Total: ${getTotal()}</p>
                    <Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Seguir comprando</button></Link>
                   <Link to="/checkout" style={{textAlign: 'center'}}><button className={'btnComprar'}>Finalizar Compra</button></Link>
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