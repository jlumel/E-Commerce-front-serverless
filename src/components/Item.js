import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'



const Item = ({ item }) => {

    return (
        <div className={'itemCard'}>

            <h2>{item.nombre}</h2>
            <div className={'itemImg'}><img src={item.img} alt={item.nombre}/></div>
            <Link to={`/item/${item.id}`} style={{textAlign: 'center'}}><button className={'verMas'}>Ver +</button></Link>
            <p>${item.precio}</p>
            
        </div>
    )
}

export default Item