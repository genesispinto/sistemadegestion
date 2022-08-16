import {Link} from "react-router-dom"
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import "./NavBar.css"
const NavBar = () => {
    const {logout} = useContext(AuthContext)
    const salirsession = ()=>{
         logout()
         
        }
        return ( 
                <nav className="navbar">
                    <Link className="ventas" to="/Cart"> Ventas</Link>
                    <Link className="compras" to="/Cart"> Compras</Link>
                    <Link className="clientes" to="/Cart"> Clientes</Link>
                    <Link className="productos" to="/Productos"> Productos</Link>
                    <Link className="inventario" to="/Inventario"> Inventario</Link>
                    <Link className="inventario" to="/" onClick={()=> salirsession()}> Cerrar sesion</Link>
                </nav >
        )
    }
    
    export default NavBar