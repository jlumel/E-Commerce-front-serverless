import React from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <Link className={'title'} to="/"><h1>Tienda Natural</h1></Link>
            <div className="menu">
                <NavLink activeClassName="active" to="/harinasyfideos" className={'categories'}>Harinas y Fideos</NavLink>
                <NavLink activeClassName="active" to="/papasypure" className={'categories'}>Papas y Puré deshidratado</NavLink>
                <NavLink activeClassName="active" to="/conservas" className={'categories'}>Conservas</NavLink>
                <NavLink activeClassName="active" to="/dulcesymermeladas" className={'categories'}>Dulces y Mermeladas</NavLink>
                <NavLink activeClassName="active" to="/cervezasartesanales" className={'categories'}>Cervezas Artesanales</NavLink>
                <NavLink activeClassName="active" to="/vinos" className={'categories'}>Vinos</NavLink>
            </div>
            <Link to="/cart">
            <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar