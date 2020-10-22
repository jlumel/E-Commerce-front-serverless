import React from 'react';
import CartWidget from './CartWidget'
const NavBar = () => {

    return (
        <nav>
            <h1>Tienda Natural</h1>
            <div className="menu">
                <p>Harinas y Fideos</p>
                <p>Papas y Puré deshidratado</p>
                <p>Conservas</p>
                <p>Dulces y Mermeladas</p>
                <p>Cervezas Artesanales</p>
                <p>Vinos</p>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar