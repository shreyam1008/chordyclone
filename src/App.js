import React from "react";
import "./App.css";

import Sidebar from "./Sidebar";
import Chat from "./Chat";

// import 
// import {selectUser} from './features/userSlice'

const App = () => {

  // const user = useSelector(selectUser)
  
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default App;
