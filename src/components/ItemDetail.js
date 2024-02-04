import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'
import './ItemDetail.css'
import { useEffect } from 'react'

const ItemDetail = ({ item }) => {


    const { add, agregado, setAgregado } = useCartContext()

    useEffect(() => {
        setAgregado(false)
    }, [setAgregado])

    return (
        <div className={'detailContainer'}>
            <div className={'detailText'}>
                <p>{item.description}</p>
            </div>
            <div className={'itemDetailCard'}>

                <h2>{item.nombre}</h2>
                <div className={'itemDetailImg'}><img src={`/img/${item.img}`} alt={item.nombre} /></div>
                <p className={'detailPrecio'}>${item.precio}</p>
                {!agregado && <ItemCount item={item} onAdd={add} initial={item.stock ? 1 : 0} stock={item.stock} />}
                {agregado && <><Link style={{ textAlign: 'center' }} to="/cart"><button className={'finCompra'}>Terminá tu compra</button></Link>
                    <Link style={{ textAlign: 'center' }} to="/"><button className={'seguirCompra'}>Seguir comprando</button></Link>
                </>

                }

            </div>

        </div>
    )
}

export default ItemDetail