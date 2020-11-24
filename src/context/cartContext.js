import React, { useContext, useState } from 'react'
import { useEffect } from 'react'

export const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children, defaultCart, defaultQuantity }) => {

    const [cart, setCart] = useState(defaultCart)

    const [totalQuantity, setTotalQuantity] = useState(defaultQuantity)

    const [agregado, setAgregado] = useState(false)

    const add = (item, quantity) => {

        if (item.stock > 0 && !cart.find(product => product.item.nombre === item.nombre)) {
            setCart([...cart, { item, quantity }])
            setTotalQuantity(totalQuantity + quantity)
            setAgregado(true)
            
        } else if (item.stock > 0) {
            cart.forEach(product => {
                if (product.item.nombre === item.nombre) {
                    product.quantity += quantity
                }
            })
            setCart(cart)
            setTotalQuantity(totalQuantity + quantity)
            setAgregado(true)
        }
    }

    const remove = id => {
        setCart(cart.filter(producto => producto.item.id !== id))
        setTotalQuantity(totalQuantity - cart.find(producto=> producto.item.id === id).quantity)
    }

    const clear = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const getTotal = () => {
        let suma = 0
        cart.forEach(producto => {
            suma += producto.quantity * producto.item.precio
        });
        return suma
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart, totalQuantity])

    return <CartContext.Provider value={{ cart, totalQuantity, agregado, setAgregado, add, remove, clear, getTotal }}>

        {children}

    </CartContext.Provider>
}

export default CartProvider