import "./Inventario.css"
import NavBar from "../NavBar/NavBar.js";
import { AuthContext} from "../context/AuthContext"
import {useContext,useState} from "react"
import {addDoc,collection} from "firebase/firestore"
import { firestoredb } from "../../firebase";
import {Link} from "react-router-dom"
import Order from "../Order/Order";

const Inventario = () =>{
    const {cargabuyer} = useContext(AuthContext)
    const [cBarra,setCbarra]=useState("");
    const [descripcion,setDescripcion]=useState("");
    const [stock,setStock]=useState("");
    const [pCompra,setPcompra]=useState("");
    const [pVenta,setPventa]=useState("");
    const [proveedor,setProveedor]=useState("");
    const [ident, setIdent]= useState(false);
    const [id, setId]= useState();


    const guardardatos=(e,i)=>{
        if(i === 1) setCbarra(e.target.value)
        if(i === 2) setDescripcion(e.target.value)
        if(i === 3) setStock(e.target.value)
        if(i === 4) setPcompra(e.target.value)
        if(i === 5) setPventa(e.target.value)
        if(i === 6) setProveedor(e.target.value)
    }
    // const createOrder = ()=>{

    //     const buyer={
    //         cBarra,
    //         descripcion,
    //         stock,
    //         pCompra,
    //         pVenta,
    //         proveedor
    //     }
        
    //     const collectionRef= collection(firestoredb, 'productos')
    //     addDoc(collectionRef, buyer).then(docRef => {
    //         const idCompra= docRef.id
    //         setId(idCompra)
    //         setIdent(!ident)
    //     //    batch.commit()
    //     }).catch(error =>{
    //     console.log(error) 
    //     })
        
    // }

    
    return(
        <div>
            <NavBar/>
            <form onSubmit={(e)=> {e.preventDefault()}}>
                <h1> Registro de productos</h1>
                <label htmlFor="Cbarra">Codigo de barra</label>
                <input type="text" name="Cbarra"onChange={(e)=>{guardardatos(e,1)}}/>
                <label htmlFor="Descripcion">Descripcion(*)</label>
                <input type="text" name="Descripcion"onChange={(e)=>{guardardatos(e,2)}}/>
                <label htmlFor="Stock">Stock(*)</label>
                <input type="text" name="Stock" onChange={(e)=>{guardardatos(e,3)}}/>
                <label htmlFor="Pcompra">Precio compra(*)</label>
                <input type="text" name="Pcompra" onChange={(e)=>{guardardatos(e,4)}}/>
                <label htmlFor="Pventa">Precio venta(*)</label>
                <input type="text" name="Pventa" onChange={(e)=>{guardardatos(e,5)}}/>
                <label htmlFor="Proveedor">Proveedor</label>
                <input type="text" name="Proveedor"onChange={(e)=>{guardardatos(e,6)}}/>
                <div className="AgregarProducto">
                    <button onClick={()=>{
                            setIdent('true')
                            cargabuyer ({
                                cBarra,
                                descripcion,
                                stock,
                                pCompra,
                                pVenta,
                                proveedor
                            })}}>+ Agregar producto</button>
                </div>  
            </form>     
            
        </div>
        
    )
}
export default Inventario

