import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //uid del user al cual quiero enviar msg
    usuarios: [],   //usuarios de la base de datos
    mensajes: [], //chat seleccionado
}

export const ChatProvider= ({children}) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);


  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch
    }}>
        {children}
    </ChatContext.Provider>
  )
}
