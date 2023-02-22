import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Chats } from './Chatting/Chats';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from 'antd/es/layout/layout';
function Speak({socket,username, room }) {
    const[currentMessage, setCurrentMessage] = useState("");
    const [messageList,setMessageList] = useState([]);
    // For Chat list
    const[chats,setChats] = useState([]);
    // fetching the current user  info
    // const { user } = useSelector((state) => state.authReducer.authData);
    


    const sendMessage = async () => {
        if (currentMessage !== "") {
          const messageData = {
            room: room,
            author: username,
            message: currentMessage,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
    
          await socket.emit("send_message", messageData);
          setMessageList((list) => [...list,messageData])
          setCurrentMessage("");
          
        }
      };


      useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setMessageList((list) => [...list, data]);

        });

      },[socket])
  return (
<div className="home">
<div className="container">



<div className="sidebar">
<div className="navbar">
        <span className="logo">SG Chat</span>
        <div className="user">

        <span>Abhay</span>
        <button variant='warning'>Log Out</button>
        </div>
</div>

{/* Search Section */}

<div className="search">
    <div className="searchForm">
        <input type="text" 
        placeholder='Find the Person'
        />
        </div>  
{/* Steve was here */}
        
        </div>


      <Chats />

      
    </div>

<div className="chat">
    <div className="chatInfo">
        <span>Steve</span>
        <div className="chatIcons">
            <img src="https://cdn-icons-png.flaticon.com/512/4084/4084017.png" alt="Camera" />
            <img src="https://cdn-icons-png.flaticon.com/512/5187/5187509.png" alt="Video" />
            <img src="https://cdn-icons-png.flaticon.com/512/6302/6302796.png" alt="Chat" />

        </div>
        
    </div>

    <div className="messages">
    <div className="chat-body">
            <ScrollToBottom className="message-container">
          {
            messageList.map((messageContent) => {
                return(
                <div className="message" id={
                    username === messageContent.author ? "You" : "other"
                }> 
<div>
                <div className="message-content">
<p>{messageContent.message}</p>

                </div>
                <div className="message-meta">
<p>{messageContent.time}</p>
<p>{messageContent.author}</p>

                </div>
</div>
                </div>
                )
            })
          }
</ScrollToBottom>
        </div>


    </div>

    <div className="input">
<input 

type="text"
value={currentMessage}
placeholder="Hey..."
onChange={(event) => {
  setCurrentMessage(event.target.value);
}}


/>
<div className="send">
    <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="png" type="image/png" id='photo-pdf'/>
    <input type="file" style={{display:"none"}}
    id='file'
    />
    <label htmlFor="file">
        <img src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" alt="pdf" id='photo-pdf' />
    </label>
    <button onClick={sendMessage}>Send</button>

    
</div>

</div>

    
   
    
</div>

   

</div>

</div>

  )
}

export default Speak;
