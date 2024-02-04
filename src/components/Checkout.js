import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import './Cart.css'
import './Checkout.css'
import firebase from 'firebase/app'
import '@firebase/firestore'
import { getFirestore } from './firebase/index'
import { useCartContext } from '../context/cartContext'

const Checkout = () => {

    const [order, setOrderId] = useState(null)

    const [error, setError] = useState(null)

    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: ""
    })

    const { cart, getTotal, clear } = useCartContext()

    const handleInputChange = event => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const sendData = event => {
        event.preventDefault()
        if (datos.nombre.length && datos.apellido.length && datos.telefono.length && !isNaN(datos.dni) && !isNaN(datos.telefono) && datos.email.length > 6 && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(datos.email) && datos.email === datos.email2) {
            const db = getFirestore()

            const orders = db.collection('orders')

            const newOrder = {
                buyer: { nombre: `${datos.nombre} ${datos.apellido}`, telefono: datos.telefono, email: datos.email },
                items: cart.map(item => ({ id: item.item.id, nombre: item.item.nombre, precio: item.item.precio })),
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: getTotal()
            }
            if (datos) {
                orders.add(newOrder).then(({ id }) => {
                    setOrderId(id)
                    clear()
                }).catch(err => {
                    setError(err)
                })
            }
        }
    }

    return (
        <>
            <h2 className={'title'}>Checkout</h2>
            <div className={'carritoContainer'}>

                {cart.length > 0 && <>
                    <ul className={'listCarrito'}>
                        <CartItems edit={false} />
                    </ul>
                    <p className={'cartTotal'}>Total: ${getTotal()}</p>
                    <Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Seguir comprando</button></Link>
                </>}
                {!order && !error &&
                    <form className={'orderForm'} onSubmit={sendData}>
                        <div><input name="nombre" id={'nombre'} placeholder="Nombre" type="text" onChange={handleInputChange} /><input name="apellido" id={'apellido'} placeholder="Apellido" type="text" onChange={handleInputChange} /></div>
                        <div><input name="dni" id={'dni'} placeholder="DNI" type="text" onChange={handleInputChange} /><input name="telefono" id={'tel'} placeholder="Teléfono" type="text" onChange={handleInputChange} /></div>
                        <div><input name="email" id={'email'} placeholder="E-mail" type="email" onChange={handleInputChange} /><input name="email2" id={'email2'} placeholder="Repetir E-mail" type="email" onChange={handleInputChange} /></div>
                        <button type="submit" disabled={cart.length > 0 ? false : true} className={'btnComprar'}>Comprar</button>
                    </form>
                }
                {order && <><div className={'finishOrder'}><div><p>Compra realizada con éxito!</p><p>Tu número de orden es <strong>{order}</strong></p></div></div><Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Volver a la tienda</button></Link></>}
                {error && <><div className={'errorOrder'}><div><p>Hubo un error en tu compra. Intentalo de nuevo más tarde.</p></div></div><Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Volver a la tienda</button></Link></>}
            </div>

        </>
    )

}

export default Checkout