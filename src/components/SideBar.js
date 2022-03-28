import React from 'react'
import { SideBarChatItem } from './SideBarChatItem'

export const SideBar = () => {

  const chats = [1,2,3,4,5,6,7,8];
  return (
    <div className="inbox_chat">

         {/* <!-- conversación activa inicio --> */}
         {
           chats.map( (chat, index) => <SideBarChatItem key={index} />)
         }
         {/* <!-- conversación activa Fin --> */}


         {/* <!-- Espacio extra para scroll --> */}
         <div className="extra_space"></div>


    </div>
  )
}
