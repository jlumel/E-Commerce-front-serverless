import './NavBar.css'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <Link className={'nombre'} to="/"><h1>Tienda Natural</h1></Link>
            <div className="menu">
                <NavLink activeClassName="active" to={"/category/harinasyfideos"} className={'categories'}>Harinas y Fideos</NavLink>
                <NavLink activeClassName="active" to={"/category/papasypure"} className={'categories'}>Papas y Puré deshidratado</NavLink>
                <NavLink activeClassName="active" to={"/category/conservas"} className={'categories'}>Conservas</NavLink>
                <NavLink activeClassName="active" to={"/category/dulcesymermeladas"} className={'categories'}>Dulces y Mermeladas</NavLink>
                <NavLink activeClassName="active" to={"/category/cervezasartesanales"} className={'categories'}>Cervezas Artesanales</NavLink>
                <NavLink activeClassName="active" to={"/category/vinos"} className={'categories'}>Vinos</NavLink>
            </div>
            <Link style={{ cursor: 'default' }} to="/cart">
                <CartWidget />
            </Link>
        </nav>
    )
}

export default NavBar