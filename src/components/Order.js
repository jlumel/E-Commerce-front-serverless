import React, { useState, useEffect } from 'react'
import './Order.css'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from './firebase/index'
import { useCartContext } from '../context/cartContext'

const Order = ({ total }) => {

    const [order, setOrderId] = useState(null)

    const [error, setError] = useState(null)

    const [userInfo, setUserInfo] = useState(null)

    const { cart } = useCartContext()

    const getUserInfo = (event) => {
        event.preventDefault()
        let nombre = document.querySelector('#nombre').value
        let apellido = document.querySelector('#apellido').value
        let telefono = document.querySelector('#tel').value
        let email = document.querySelector('#email').value
        if (nombre.length && apellido.length && telefono.length && !isNaN(telefono) && email.length > 6 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setUserInfo({
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                email: email
            })
        }
    }

    useEffect(() => {

        const db = getFirestore()

        const orders = db.collection('orders')

        const newOrder = {
            buyer: userInfo,
            items: cart.map(item => ({ id: item.item.id, nombre: item.item.nombre, precio: item.item.precio })),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
        if (userInfo) {
            orders.add(newOrder).then(({ id }) => {
                setOrderId(id)

            }).catch(err => {
                setError(err)
            })
        }
    }, [userInfo])

    return (
        <>
            {!order && !error &&
                <form className={'orderForm'}>
                    <div><input id={'nombre'} placeholder="Nombre" type="text" /><input id={'apellido'} placeholder="Apellido" type="text" /></div>
                    <div><input id={'tel'} placeholder="01155555555" type="text" /><input id={'email'} placeholder="email@email.com" type="email" /></div>
                    <button onClick={(event) => getUserInfo(event)} className={'btnComprar'}>Comprar</button>
                </form>
            }
            {order && <div className={'finishOrder'}><p>Compra realizada con éxito!<p>Tu número de orden es <strong>{order}</strong></p></p></div>}
            {error && <div className={'errorOrder'}><p>Hubo un error en tu compra. Intentalo de nuevo más tarde.</p></div>}

        </>
    )

}

export default Order