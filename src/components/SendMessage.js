import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { SocketContext } from '../auth/SocketContext';
import { ChatContext } from '../context/chat/ChatContext';

export const SendMessage = () => {

  const [message, setMessage] = useState("");
  const {socket} = useContext(SocketContext);
  const {auth} = useContext(AuthContext);
  const {chatState} = useContext(ChatContext);

  const onChange = ({target}) => {
    setMessage(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(message.length === 0) return;

    setMessage("");

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje: message
    })
  }

  return (
    <form onSubmit = {onSubmit}>
      <div className="type_msg row">
          <div className="input_msg_write col-sm-9">
              <input 
                type="text" 
                className="write_msg" 
                placeholder="Mensaje..." 
                value={message}
                onChange={onChange}
              />
          </div>
          <div className="col-sm-3 text-center">
              <button className="msg_send_btn mt-3" type="submit">
                  enviar
              </button>
          </div>
      </div>
    </form>
  )
}
