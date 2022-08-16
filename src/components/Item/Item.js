
import ProductosVencidos from "../ProductosVencidos/ProductosVencidos.js";
import TablaStock from "../TablaStoock/TablaStock.js";
import "./Item.css"
import NavBar from "../NavBar/NavBar.js";
const Item = () =>{
    const date = new Date();

    return(
        <div>
            <NavBar/>
            
            {/* <p>{date.toDateString()}</p>
            <br/><br/>
            <h2>Productos sin stock</h2>
            <TablaStock/>
            <h2>Productos proximos a vencer</h2>
            <ProductosVencidos/> */}
        </div>
    )
}

export default Item;