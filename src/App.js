import React from "react";
import "./App.css";
import { Counter } from "./features/Counter";
import Sidebar from "./Sidebar";
import Chat from "./Chat";


const App = () => {
  return (
    <div className="app">
  
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
};

export default App;
