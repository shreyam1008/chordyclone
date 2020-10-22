import React, { useEffect } from "react";
import "./App.css";

import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import { login, logout } from "./features/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // login
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <div>
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
