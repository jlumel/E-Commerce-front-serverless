import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'
import './ItemDetail.css'
import { useEffect } from 'react'

const ItemDetail = ({ item }) => {


    const { add, agregado, setAgregado } = useCartContext()

    useEffect(()=>{
        setAgregado(false)
    },[setAgregado])

    return (
        <div className={'detailContainer'}>
            <div className={'detailText'}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem consectetur natus assumenda sunt repellendus mollitia, quidem minus ad, corrupti ipsa ipsum vel suscipit aliquam beatae dolores rerum, molestias cupiditate?</p>
            </div>
            <div className={'itemDetailCard'}>

                <h2>{item.nombre}</h2>
                <div className={'itemDetailImg'}><img src={item.img} alt="" /></div>
                <p className={'detailPrecio'}>${item.precio}</p>
                {!agregado && <ItemCount item={item} onAdd={add} initial={item.stock ? 1 : 0} stock={item.stock} />}
                {agregado && <Link style={{ textAlign: 'center' }} to="/cart"><button className={'finCompra'}>Terminá tu compra</button></Link>}

            </div>

        </div>
    )
}

export default ItemDetail