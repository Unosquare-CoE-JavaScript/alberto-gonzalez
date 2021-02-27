import React, { useState } from "react";

const Status = ({ onEnter }) => {
  let [message, setMessage] = useState("");
  return (
    <input
      type="text"
      onKeyUp={(e) => {
        if (e.keyCode === 13) {
          onEnter(message);
          setMessage("");
        }
      }}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
};

export default Status;
