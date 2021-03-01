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
import React from "react";
import { useDarkMode } from "./useDarkMode";

function App() {
  let isDarkMode = useDarkMode();

  return (
    <div
      style={{
        height: 500,
        width: 500,
        color: isDarkMode ? "white" : "black",
        backgroundColor: isDarkMode ? "black" : "white",
      }}
    >
      Here's some content
    </div>
  );
}

//#endregion

export default App;
