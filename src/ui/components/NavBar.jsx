import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const {user, logout} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        alert('saliendo')
        logout()
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger bg-gradient p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Empresa Moreliana
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/employees"
                    >
                        Empleados
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/upload"
                    >
                        Cargar
                    </NavLink>

                    
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}
                    >Logout</button>
                </ul>
            </div>
        </nav>
    )
}