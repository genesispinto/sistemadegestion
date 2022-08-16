import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Inventario from './components/Inventario/Inventario';
import Order from './components/Order/Order';
import {AuthProvider} from './components/context/AuthContext'


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Item' element={<Item/>} />
        <Route path='/Productos' element={<ItemListContainer/>} />
        <Route path='/Inventario' element={<Inventario/>} />
        <Route path='/Order' element={<Order/>} />
        </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
