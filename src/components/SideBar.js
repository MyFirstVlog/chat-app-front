import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../auth/AuthContext'
import { SideBarChatItem } from './SideBarChatItem'

export const SideBar = () => {

  const {chatState} = useContext(ChatContext);

  const {auth} = useContext(AuthContext)

  console.log({auth});

  return (
    <div className="inbox_chat">

         {/* <!-- conversación activa inicio --> */}
         {
           chatState.usuarios
            .filter(usuario => usuario.uid !== auth.uid)
            .map( (usuario, index) => 
              <SideBarChatItem 
                key={usuario.uid} 
                usuario = {usuario}
              />
          )
         }
         {/* <!-- conversación activa Fin --> */}


         {/* <!-- Espacio extra para scroll --> */}
         <div className="extra_space"></div>


    </div>
  )
}
