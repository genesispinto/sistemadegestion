import { products } from "../../productos.js";
const ProductosVencidos =()=>{
    const date = new Date();
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
                let date2= new Date(product.dateRegister)
                console.log(date)
                console.log(date2)
                if(date2 < date)
                {
                   
                    return(
                        <tr key= {product.id}>
                             <td>{product.name}</td>
                             <td>{product.Envase}</td>
                             <td>{product.dateRegister}</td>
                             <td>{product.stock}</td>
                             <td>{product.price}</td>
                             <td>{product.state}</td>
                         </tr>)
                }
                else return null  
                })
                }
                  
                </tbody>
            </table> 
    )
}

export default ProductosVencidos