import React, { useEffect, useState } from "react";
import Nav_Experts from "./Nav_Experts";
import NavBar3 from "./NavBar3";
import "./Connect_Emp.css";
import "./Speak.css";
// import Conversations from './Chat-Sections/Conversations'
import Sms from "./Chat-Sections/Sms";
import ScrollToBottom from "react-scroll-to-bottom";
import { useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";

import Footer from "./Footer";
import Input_footer from "./Input_footer";
export const Connect_Emp = ({ socket }) => {
  // Use States
  const [empid, setEmpid] = useState("");
  const [conversations, setConversations] = useState([]);
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

  console.log("This is new list here", newList);

  console.log("See watch Acctually there in Conversations", conversations);

  let userid = localStorage.getItem("email_Employee");
  useEffect(() => {
    axios
      .get(`http://100.25.193.158:4000/employee/find/?email=${userid}`)
      .then((response) => {
        console.log(response);
        setEmpid(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Nav_Experts />
      <NavBar3 />

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
                            <p>{msg.content.message}</p>
                          </div>
                          <div className="message-meta">
                            <p>{format(msg.content.timestamp)}</p>
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
    </div>
  );
};

export default Connect_Emp;
