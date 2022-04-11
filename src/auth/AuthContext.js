import { createContext, useCallback, useState } from "react";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
};

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
      const resp = await fetchSinToken('login',{email, password}, 'POST');

      if(resp.ok){
        localStorage.setItem('token', resp.token);
        setAuth({
          uid: resp.usuario.uid,
          checking: false,
          logged: true,
          name: resp.usuario.nombre,
          email: resp.usuario.email
        })
      }

      return resp.ok;
  }

  const register = async (nombre, email, password) => {

    const {usuario, token, ok, msg} = await fetchSinToken('login/new', {email, password, nombre}, 'POST');

    if(ok){
      localStorage.setItem('token', token);
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      })

      return true;
    }

    return msg;
  }

  const verificarToken = useCallback( async() => {

    const token = localStorage.getItem('token');
    if(!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      })

      return false;
    }

    const resp = await fetchConToken('login/renew');

    console.log(resp)

    if(resp.ok){
      console.log('entreeeee',resp.uid)
      localStorage.setItem('token', token);
      setAuth({
        uid: resp.usuario.uid,
        checking: false,
        logged: true,
        name: resp.usuario.nombre,
        email: resp.usuario.email
      })

      return true;
    }else{
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      })

      return false;
    }

  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      checking: false,
      logged: false,
    })
  }


  return (
    <AuthContext.Provider
      value={
        {
          auth,
          login,
          register,
          verificarToken,
          logout,
        }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}