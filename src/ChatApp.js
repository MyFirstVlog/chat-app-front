import React from 'react'
import { AuthProvider } from './auth/AuthContext'
import { SocketProvider } from './auth/SocketContext'
import { ChatProvider } from './context/chat/ChatContext'
import { AppRouter } from './router/AppRouter'

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const ChatApp = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}
