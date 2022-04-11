import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocketContext'
import { AuthContext } from './AuthContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('http://localhost:8080');
    const {auth} = useContext(AuthContext);

    useEffect(() => {
      if(auth.logged) {
        conectarSocket();
      }
    }, [auth])
    
    useEffect(() => {
      if(!auth.logged) {
        desconectarSocket();
      }
    }, [auth])
    
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}