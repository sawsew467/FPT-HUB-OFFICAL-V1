import React, { useState } from "react";
import { useSelector } from "react-redux";
import Composer from "../components/Composer";
import Menu from "../components/Menu";
import Post from "../components/Post";
import Trending from "../components/Trending";
import Header from "../parts/Header";
import { postsSelector, usersSelector } from "../redux/selectors";

function Bookmark(props) {
  const currentId = JSON.parse(window.localStorage.getItem("currentUser")).id;
  const postList = useSelector(postsSelector);
  const userList = useSelector(usersSelector);
  const currentUser = userList.filter(user => user.id === currentId);

  return (
    <>
      <div className={props.mode === true ? "dark" : "light"}>
        <Header></Header>
        <div className="sm:mt-20 mt-[70px] bg-zinc-200 dark:bg-black	z-10">
          <div className="mx-auto container lg-auto sm:p-7 flex justify-between items-start gap-7 py-2 sm:pt0">
            <Menu choose={4}></Menu>
            <div className="flex-1 min-h-screen	">
              <p className="dark:text-white700 text-2xl pl-2 sm:pl-0">Dấu trang</p>
              <p className="dark:text-white700 text-md sm:mb-5 mb-2 pl-2 sm:pl-0">
                @{currentUser[0].userName}
              </p>
              {
                postList.map((item, index) => {
                  if (currentUser[0].bookmarkList.includes(item.id)===true)
                  return (
                    <Post key={index} info={item}></Post>
                  )
                })
              }
            </div>
            <Trending></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmark;
