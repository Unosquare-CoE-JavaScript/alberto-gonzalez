import React from "react";
import { useChat } from "../hooks/useChat";

const Input = () => {
  let { state, dispatch } = useChat();

  return (
    <div>
      <textarea
        style={{ padding: 12 }}
        value={state.currentMessage}
        onChange={(e) =>
          dispatch({ type: "setCurrentMessage", message: e.target.value })
        }
        onKeyUp={(e) =>
          e.keyCode === 13
            ? dispatch({ type: "addMessage", message: e.target.value })
            : null
        }
      />
    </div>
  );
};

export default Input;
