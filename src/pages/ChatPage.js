import React from 'react'
import { ChatSelected } from '../components/ChatSelected'
import { InboxPeople } from '../components/InboxPeople'
import { Messages } from '../components/Messages'

import '../css/chat.css'

export const ChatPage = () => {
  return (
    <div className="messaging">
        <div className="inbox_msg">

           <InboxPeople />

              {
                (false)
                  ? <Messages />
                  : <ChatSelected />
              }

        </div>


    </div>
  )
}
