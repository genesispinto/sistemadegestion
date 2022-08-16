import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {addDoc,collection} from "firebase/firestore"
import { firestoredb } from "../../firebase";
import Inventario from "../Inventario/Inventario";


const Order =()=>{
    const {buyer} = useContext(AuthContext)
    const [ident, setIdent]= useState('true')
    const [id, setId]= useState()



const createOrder = ()=>{    
    setId(1)


    // const collectionRef= collection(firestoredb, 'productos')
    // addDoc(collectionRef, buyer).then(docRef => {
    //     const idCompra= docRef.id
    //     setId(idCompra)
    //     setIdent(false)
    // //    batch.commit()
    // }).catch(error =>{
    // console.log(error) 
    // })
    
}
createOrder()
return(
    <div>    
    <p> Id de producto: {id}</p> 
    

    </div>
    
    //  <Inventario/>
    // <div>
    // <h1>{user}</h1>
    // <p>Nombre:  {buyer.descripcion}</p>
    // <p>Telefono: {buyer.stock}</p>   
    // <p>Email:    {buyer.pVenta}</p>    
    // <p>Total de la compra :  {buyer.pCompra}</p>   
    // <p> Id de producto:    {id}</p> 
    // {ident ? <button onClick={()=> createOrder()}>Generar Orden</button>: null}

    // </div>
    
)
}

export default Order