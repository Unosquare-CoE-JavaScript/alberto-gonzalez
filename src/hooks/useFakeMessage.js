import { useEffect } from "react";

export const useFakeMessage = ({
  dispatch,
  message,
  from = "Test",
  timeout = 5000,
}) => {
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "addMessage", message });
    }, timeout);
  }, [dispatch, message, from, timeout]);
};
