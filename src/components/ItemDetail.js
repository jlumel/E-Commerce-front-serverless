import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {

    const [agregado, setAgregado] = useState(false)

    const onAdd = (count) => {
        if (item.stock > 0) {
            setAgregado(true)
            console.log(`Cantidad agregada: ${count}`)
        }
    }

    return (
        <div className={'detailContainer'}>
            <div className={'detailText'}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo exercitationem consectetur natus assumenda sunt repellendus mollitia, quidem minus ad, corrupti ipsa ipsum vel suscipit aliquam beatae dolores rerum, molestias cupiditate?</p>
            </div>
            <div className={'itemDetailCard'}>

                <h2>{item.nombre}</h2>
                <div className={'itemDetailImg'}><img src={item.img} alt="" /></div>
                <p className={'detailPrecio'}>${item.precio}</p>
                {!agregado && <ItemCount onAdd={onAdd}  initial={item.stock ? 1 : 0} stock={item.stock} />}
                {agregado && <Link style={{textAlign: 'center'}} to="/cart"><button className={'finCompra'}>Terminá tu compra</button></Link>}

            </div>

        </div>
    )
}

export default ItemDetail