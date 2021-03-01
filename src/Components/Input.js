import React from "react";
import { useChat } from "../hooks/useChat";

export const ChatInput = () => {
  let { state, dispatch } = useChat();
  return (
    <Input
      value={state.currentMessage}
      onChange={(e) =>
        dispatch({ type: "setCurrentMessage", message: e.target.value })
      }
      onEnter={(e) => dispatch({ type: "addMessage", message: e.target.value })}
    />
  );
};

const Input = ({ onChange, onEnter, value }) => {
  return (
    <div>
      <textarea
        style={{ padding: 12 }}
        value={value}
        onChange={onChange}
        onKeyUp={(e) => (e.keyCode === 13 ? onEnter(e) : null)}
      />
    </div>
  );
};

export default Input;
