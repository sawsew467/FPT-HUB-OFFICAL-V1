import { Routes, Route } from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import "./index.css";
import { useSelector } from "react-redux";
import { darkmodeSelector, postsSelector } from "./redux/selectors";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import axios from "axios";

function App() {
  const isDark = useSelector(darkmodeSelector);
  const postList = useSelector(postsSelector);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login mode={isDark}></Login>} />
        <Route path="/login" element={<Login mode={isDark}></Login>} />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route
          path="/home"
          element={<Home mode={isDark} postList={postList}></Home>}
        />
        <Route path="/explore" element={<Explore mode={isDark}></Explore>} />
        <Route
          path="/notifications"
          element={<Notifications mode={isDark}></Notifications>}
        />
        <Route path="/bookmark" element={<Bookmark mode={isDark}></Bookmark>} />
        <Route path="/settings" element={<Settings mode={isDark}></Settings>} />
        <Route path="/profile" element={<Profile mode={isDark}></Profile>} />
      </Routes>
    </>
  );
}

export default App;
