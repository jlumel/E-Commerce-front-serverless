import React from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <h1>Tienda Natural</h1>
            <div className="menu">
                <Link className={'categories'}>Harinas y Fideos</Link>
                <Link className={'categories'}>Papas y Puré deshidratado</Link>
                <Link className={'categories'}>Conservas</Link>
                <Link className={'categories'}>Dulces y Mermeladas</Link>
                <Link className={'categories'}>Cervezas Artesanales</Link>
                <Link className={'categories'}>Vinos</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar