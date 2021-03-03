import React, { createContext, useContext } from "react";
import { useChatReducer } from "../Reducers/chatReducer";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  let [state, dispatch] = useChatReducer();

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
