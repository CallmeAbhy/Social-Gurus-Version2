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
import { useParams } from "react-router-dom";
import URLSearchParams from "url-search-params";
import Footer from "./Footer";
import Input_footer from "./Input_footer";
export const Connect_Emp = (props) => {
  // Use States
  const [empid, setEmpid] = useState();
  const [conversations, setConversations] = useState([]);
  const [client, setClient] = useState();
  console.log("Window Location", window.location);
  const myKeyValue = window.location.search;
  const urlParams = new URLSearchParams(myKeyValue);

  const param1 = urlParams.get("client");
  console.log("The value of client", param1);

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

  let str1 = String(empid) + String(param1);
  console.log(str1);
  let pass = parseInt(param1);

  useEffect(() => {
    props.socket.on("connect", () => {
      console.log("Connected");
      props.socket.emit("joinRoom", str1);
    });

    props.socket.on("newMessage", (data) => {
      console.log("This is the data", data);
      setConversations((list) => [...list, data]);
    });

    props.socket.on("disconnect", () => {
      console.log("Not Connected");
      props.socket.emit("leaveRoom", str1);
    });

    return () => {
      props.socket.off("connect");
      props.socket.off("disconnect");
      props.socket.off("joinRoom");
      props.socket.off("leaveRoom");
    };
  }, []);

  console.log("See watch Acctually there in Conversations", conversations);

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
                      <div
                        className="message"
                        id={msg.content.from === empid ? "You" : "other"}
                      >
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
              <Input_footer
                socket={props.socket}
                login={empid}
                receiver={pass}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Connect_Emp;
