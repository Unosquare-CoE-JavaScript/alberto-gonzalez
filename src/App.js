//#region UseStateClass
// import "./App.css";
// import { useState } from "react";
// import Status from "./Components/Status";

// function App() {
//   let [messages, setMessages] = useState(["test", "test2"]);

//   return (
//     <div>
//       <Status onEnter={(value) => setMessages([value, ...messages])} />
//       <ul>
//         {messages.map((message) => (
//           <li key={message}>{message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//#endregion

//#region useReducerClass
// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "buttonClick":
//       return { ...state, count: state.count + 1 };
//     case "setUsername":
//       return { ...state, username: action.username };
//     default:
//       break;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0, username: "" });

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "buttonClick" })}>
//         Click me
//       </button>
//       Current count is {state.count}
//       <input
//         type="text"
//         value={state.username}
//         onChange={(e) =>
//           dispatch({ type: "setUsername", username: e.target.value })
//         }
//       ></input>
//       Your current user name is {state.username}
//     </div>
//   );
// }
//#endregion

//#region useContext
// import React from "react";
// import { AppProvider } from "./appContext";
// import Content from "./Components/Content";
// import Sidebar from "./Components/Sidebar";

// function App() {
//   return (
//     <AppProvider>
//       <div>
//         <Content />
//         <Sidebar />
//       </div>
//     </AppProvider>
//   );
// }
//#endregion

//#region useEffect
// import React from "react";
// import { useDarkMode } from "./useDarkMode";

// function App() {
//   let isDarkMode = useDarkMode();

//   return (
//     <div
//       style={{
//         height: 500,
//         width: 500,
//         color: isDarkMode ? "white" : "black",
//         backgroundColor: isDarkMode ? "black" : "white",
//       }}
//     >
//       Here's some content
//     </div>
//   );
// }

//#endregion

//#region Custom Hooks section

// import React, { useState } from "react";
// import { usePicture } from "./hooks/usePicture";

// const App = () => {
//   let [date, setDate] = useState("2020-05-05");
//   let { picture, loading } = usePicture(date);
//   console.log(picture);
//   if (loading) return <div>Loading..</div>;
//   return (
//     <div>
//       <input
//         type="date"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <h3>Hi!</h3>
//       <div>{picture.explanation}</div>
//       <img src={picture.url} alt={picture.title}></img>
//     </div>
//   );
// };

//#endregion

//#region Creating a usePersistStorage hook
// import React from "react";
// import { useStorage } from "./hooks/useStorage";

// const App = () => {
//   let [count, setCount] = useStorage("count", 0);

//   return <div onClick={() => setCount(count + 1)}>The count is {count}</div>;
// };
//#endregion

//#region useCallBack
// import React, { useCallback, useState } from "react";
// import { useComplete } from "./hooks/useComplete";

// const App = () => {
//   let [clicked, setClicked] = useState();

//   let completeCallback = useCallback((data) => console.log(data), []);
//   useComplete(completeCallback);

//   return (
//     <div onClick={() => setClicked(!clicked)}>
//       Hello {clicked ? "clicked" : "not clicked"}
//     </div>
//   );
// };

//#endregion

import React from "react";
import Input from "./Components/Input";
import Message from "./Components/Message";
import { useFakeConvo } from "./hooks/useFakeConvo";
import { useScrollToBottom } from "./hooks/useScroollToBottom";
import { useChatReducer } from "./Reducers/chatReducer";

const styles = {
  wrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    overflow: "scroll",
    height: "max-content",
    flexDirection: "column",
  },
};

const App = () => {
  let [state, dispatch] = useChatReducer();

  useFakeConvo(dispatch);
  let scrollRef = useScrollToBottom(state.messages);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container} ref={(ref) => (scrollRef.current = ref)}>
        {state.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <Input
        value={state.currentMessage}
        onChange={(message) => dispatch({ type: "setCurrentMessage", message })}
        onEnter={(message) => dispatch({ type: "addMessage", message })}
      />
    </div>
  );
};

export default App;
