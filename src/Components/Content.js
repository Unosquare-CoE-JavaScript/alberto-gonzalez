import React from "react";
import { useAppContext } from "../appContext";

const Content = () => {
  let { them: theme } = useAppContext();
  return (
    <div style={{ color: theme === "dark" ? "black" : "red" }}>
      Here is our main content
    </div>
  );
};

export default Content;
