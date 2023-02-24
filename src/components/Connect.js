import React, { useState } from "react";
import "./Connect_Emp.css";
import "./Speak.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Nav_Agencies from "./Nav_Agencies";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import Input_footer from "./Input_footer";
import { format } from "timeago.js";

function Connect({ socket }) {
  // Use State
  const [conversations, setConversations] = useState([]);
  const [client, setClient] = useState();
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
      socket.emit("joinRoom", "61");
    });

    socket.on("newMessage", (data) => {
      setConversations((list) => [...list, data]);
    });

    socket.on("disconnect", () => {
      console.log("Not Connected");
      socket.emit("leaveRoom", "61");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("joinRoom");
      socket.off("leaveRoom");
    };
  }, []);

  console.log("See watch Acctually there in Conversations", conversations);

  const userid = localStorage.getItem("email_client");
  useEffect(() => {
    axios
      .get(`http://100.25.193.158:4000/client/find/?email=${userid}`)
      .then((response) => {
        console.log(response);
        setClient(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Nav_Agencies />
      <NavBar2 />

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* <input placeholder="Search For Friends" className="chatMenuInput" /> */}
            {/* <Conversations /> */}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chat">
              <div
                className="chatInfo"
                style={{
                  backgroundColor: "white",
                  "border-bottom": "1px solid #242424",
                }}
              >
                <span style={{ color: "#242424" }}></span>
                <div className="chatIcons">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1590/1590877.png"
                    alt="Camera"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1176/1176424.png"
                    alt="Video"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8793/8793799.png"
                    alt="Chat"
                  />
                </div>
              </div>
            </div>

            <div className="messages">
              <div className="chat-body">
                <ScrollToBottom className="message-container">
                  {conversations.map((msg) => {
                    console.log("The data in a map will be :", msg);

                    return (
                      <div className="message">
                        <div>
                          <div className="message-content">
                            <p>{msg.message}</p>
                          </div>
                          <div className="message-meta">
                            <p>{format(msg.timestamp)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ScrollToBottom>
              </div>
            </div>

            <div className="chat__footer">
              <Input_footer socket={socket} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Connect;
