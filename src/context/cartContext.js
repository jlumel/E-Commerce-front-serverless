import React, { useContext, useState } from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children, defaultCart }) => {

    const [cart, setCart] = useState(defaultCart)

    const [agregado, setAgregado] = useState(false)

    const add = (item, quantity) => {

        if (item.stock > 0 && !cart.find(product => product.item.nombre === item.nombre)) {
            setCart([...cart, { item, quantity }])
            setAgregado(true)
            console.log(`Item agregado: ${item.nombre} - Cantidad: ${quantity}`)
        } else if (item.stock > 0) {
            cart.forEach(product => {
                if (product.item.nombre === item.nombre) {
                    product.quantity += quantity
                }
            })
            setCart(cart)
            setAgregado(true)
        }
    }

    const remove = id => {
        setCart(cart.filter(item => item.id !== Number(id)))
    }

    const clear = () => {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, agregado, setAgregado, add, remove, clear }}>

        {children}

    </CartContext.Provider>
}

export default CartProvider