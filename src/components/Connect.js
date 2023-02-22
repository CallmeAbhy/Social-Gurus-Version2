
import React, { useState } from "react";
import { io } from "socket.io-client";
import './Speak.css'
import Speak from "./Speak";
import Nav_Agencies from "./Nav_Agencies";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";


function Connect() {
  const [username, setUsername] = useState("");
  const [room,setRoom] = useState("")
  const [show,setShow] = useState(false)
 


  const joinRoom = () => {
    if(username !== "" && room !== ""){
      // socket.emit("join_room", room)
      setShow(true);
    }

  }
  return (
    <>
    <Nav_Agencies />
    <NavBar2 />
   
    <div className="chat-div">
      {
        !show ? 
      
      <div className="joinChatContainer">
    <h3>Join the Chat</h3>
    <input type="text" placeholder="Username  "
    onChange={(event) =>
    {
      setUsername(event.target.value);
    }
    }
    />
    <input type="text" placeholder="Room "
  onChange={(event) =>
    {
      setRoom(event.target.value);
    }
    }
    />
    <button onClick={joinRoom}>Connect</button>
    </div>
:


    <Speak socket={ ""} username={username} room={room} />


  }


    
    
    </div>
    <Footer />
    </>
  )
}

export default Connect;