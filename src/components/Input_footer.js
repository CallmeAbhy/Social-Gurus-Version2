import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Input_footer = (props) => {
  const [newMessage, setNewMessage] = useState();
  const [empid, setEmpid] = useState("");
  const [clied, setClied] = useState("");
  const [messageList, setMessageList] = useState([]);

  let sender = props.login;
  let customer = props.receiver;

  let userid = localStorage.getItem("email_Employee");
  let clid = localStorage.getItem("email_client");
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

  useEffect(() => {
    axios
      .get(`http://100.25.193.158:4000/client/find/?email=${clid}`)
      .then((response) => {
        console.log(response);
        setClied(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      let messageData = {
        from: sender,
        to: customer,
        message: newMessage,
        roomId: customer.toString() + sender.toString(),
        timestamp: new Date().toISOString(),
      };

      props.socket.emit("newMessage", messageData);
      console.log(messageData);

      setMessageList((list) => [...list, messageData]);

      setNewMessage("");
    }
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="sendBtn" onClick={(e) => handleSubmit(e)}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Input_footer;
