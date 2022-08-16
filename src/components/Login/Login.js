import "./Login.css"
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import {auth} from '../../firebase';
import Icon from "../spinner/spinner";


const Login =()=>{
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();          
        setLoading(true);
        try {
            let user1 = await login(email, password)
            console.log(user1)
            setLoading(false);
            setUser(user1)
        } catch (error) {
          setLoading(false);
          setError('Error Credentials');
          setTimeout(() => setError(''), 1500);
        }
        

      }

    return(
        <form className="form1" onSubmit={handleSubmit}>
            <div className="form">
            {error && <p className='error' >{error}</p>}
            {user && (
          <Navigate to="/Item" replace={true} />
        )}
                <img src="avatar.png" alt='Avatar' />
                <label htmlFor="Usuario"> Email</label><br></br>
                <input type='email'name="Usuario"  onChange={e=> setEmail(e.target.value)}/>
                <label htmlFor="password"> Contraseña</label><br></br>
                <input type='text'name="password" onChange={e=> setPassword(e.target.value)}/>
                
            </div>
            <div className="btn">
                <input type='submit'name="entrar" value='Entrar'/>
            </div>
            {loading && <Icon/>}
            

        </form>
    )
}
export default Login
