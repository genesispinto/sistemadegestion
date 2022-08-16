import { products } from "../../productos.js";
const TablaStock = ()=>{
    return(
<table>
            
                <thead>
                    <tr>
                        <th>Descripcion</th>
                        <th>Presentacion</th>
                        <th>F.Registro</th>
                        <th>Stock</th>
                        <th>P.Venta</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => {
                 let className = 'menu';
                if (product.stock>0) className = ' menu-active';
                let className1 = 'menu';
                if (product.state === 'Activo') className1 = ' menu-active';
                if(product.stock === 0 )
                {
                    return(
                        <tr key= {product.id}>
                             <td>{product.name}</td>
                             <td>{product.Envase}</td>
                             <td>{product.dateRegister}</td>
                             <td className={className}>{product.stock}</td>
                             <td>{product.price}</td>
                             <td className={className1}>{product.state}</td>
                         </tr>)
                }
                else return null  
                })}
                  
                </tbody>
            </table>
    )
    
}

export default TablaStock