import { products } from "../../productos.js";
import './ItemListContainer.css'
import NavBar from "../NavBar/NavBar.js";
const ItemListContainer = ()=>{


    return(
        <div>
            <NavBar/>
            <h1>Productos Farmaceuticos</h1>
            <table>
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Presentacion</th>
                        <th>F.Registro</th>
                        <th>Stock</th>
                        <th>P.Venta</th>
                        <th>Estado</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => {
                 let className = 'menu';
                if (product.stock>0) className = ' menu-active';
                let className1 = 'menu';
                if (product.state === 'Activo') className1 = ' menu-active';
                    return(
                   <tr key= {product.id}>
                        <td>{product.name}</td>
                        <td>{product.Envase}</td>
                        <td>{product.dateRegister}</td>
                        <td className={className}>{product.stock}</td>
                        <td>{product.price}</td>
                        <td className={className1}>{product.state}</td>
                        <td>{product.type}</td> 
                        <td>
                            
                            <button> Editar</button>
                            <button> Similar</button> <br/>
                            <button> Eliminar</button>
                        </td> 
                    </tr>)
                })}
                  
                </tbody>
            </table>
            
                
            
            </div>
)}

export default ItemListContainer;