import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../services/firebase.js";
import DEMO_USERS from "../data/usersDemo";
import DEMO_POSTS from "../data/listDemo";

function Login() {
  const sendDataDemo = () => {
    window.localStorage.setItem("users", JSON.stringify(DEMO_USERS));
    window.localStorage.setItem("posts", JSON.stringify(DEMO_POSTS));
    window.localStorage.setItem("currentUser", JSON.stringify(DEMO_USERS[0]));
    // window.localStorage.setItem('currentUser', JSON.stringify("a00000001"));
    // for (let i = 0; i < DEMO_USERS.length; i++) {
    //   if (DEMO_USERS[i] === "a00000001") {
    //     window.localStorage.setItem("currentUser", JSON.stringify(DEMO_USERS[i]));
    //   }
    // }
  };
  return (
    <>
      <img
        className="fixed top-0 bottom-0 w-screen h-screen object-cover"
        src={require("../assets/images/background.png")}
      ></img>
      <div className="relative w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col items-center w-full sm:w-[30rem] ">
          <h2 className="text-white text-4xl mb-10 max-w-[20rem] sm:w-full text-center">ĐĂNG NHẬP VÀO FPT HUB</h2>
          <div className="relative w-8/12">
            <input
              className="w-full text-lg py-2 pr-3 pl-10 rounded-xl placeholder:text-gray-800 bg-[#ffffff9c] outline-none"
              placeholder="Tên tài khoản"
            ></input>
            <div className="absolute top-0 left-0 w-10 h-full flex justify-center items-center">
              <i className="fa-solid fa-user text-lg text-orange"></i>
            </div>
          </div>
          <div className="w-8/12 relative my-3">
            <input
              className="w-full text-lg py-2 pr-3 pl-10 rounded-xl placeholder:text-gray-800 bg-[#ffffff9c] outline-none"
              placeholder="Mật khẩu"
              type="password"
            ></input>
            <div className="absolute top-0 left-0 w-10 h-full flex justify-center items-center">
              <i className="fa-solid fa-lock text-lg text-orange"></i>
            </div>
          </div>
          <div className="flex w-8/12 justify-between items-center text-white">
            <div className="flex items-center gap-1">
              <input className="" type="checkbox"></input>
              <p className="text-md">Nhớ mật khẩu</p>
            </div>
            <Link to="" className="hover:underline text-md">
              Quên mật khẩu?
            </Link>
          </div>
          <button className="w-7/12 text-lg py-2 px-3 mt-3 bg-[#ffffff9c] text-center rounded-full cursor-not-allowed">
            Đăng nhập
          </button>
          <span className="text-white text-xs my-1">Hoặc</span>
          {/* <button
            className="w-7/12 text-lg py-2 px-3 bg-[#ffffff9c] text-center rounded-full"
            onClick={signInWithGoogle}
          >
            Đăng nhập bằng Google
          </button> */}
          <Link to="/signin" className="w-7/12">
            <button className="w-full text-lg py-2 px-3 bg-[#ffffff9c] text-center rounded-full">
              Đăng kí
            </button>
          </Link>
          <Link to="/home" onClick={sendDataDemo}>
            <div className="flex flex-col justify-center items-center bg-[#ffffff9c] mt-3 rounded-xl p-5">
              <i className="fa-solid fa-circle-user text-black text-2xl"></i>
              <p className="text-lg text-black">Demo user</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
