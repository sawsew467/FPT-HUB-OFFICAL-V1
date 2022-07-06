import { React, useState } from "react";
import { Link } from "react-router-dom";
import InteractionBar from "./InteractionBar";
import { darkmodeSelector, postsSelector, usersSelector } from "../redux/selectors";
import { useSelector } from "react-redux";

function Post(props) {
  const currentId = JSON.parse(window.localStorage.getItem("currentUser")).id;
  const postList = useSelector(postsSelector);
  const userList = useSelector(usersSelector);
  const currentUser = userList.filter((user) => user.id === currentId);

  const info = props.info;
  const owner = userList.filter((user) => user.id === info.owner);
  const isSeed = currentUser[0].seedList.includes(info.id);
  const isFlag = currentUser[0].flagList.includes(info.id);
  const isBookmark = currentUser[0].bookmarkList.includes(info.id);
  // console.log(info.counterFlag, " ", info.counterFlag);
  return (
    <>
      <div className="w-full flex flex-col sm:gap-3 gap-2 bg-white dark:bg-[#242526] dark:text-white700 sm:rounded-xl sm:drop-shadow-xl sm:p-5 p-2 min-h-[5rem] sm:mb-7 mb-2">
        <div className="flex justify-between">
          <div className="flex sm:gap-5 gap-2">
            <img className="max-h-[50px]" src={owner[0].avatar} alt=""></img>
            <div className="flex flex-col justify-center">
              <div className="flex gap-2">
                <Link
                  to="/profile"
                  onClick={() =>
                    window.localStorage.setItem(
                      "targetId",
                      JSON.stringify(owner[0].id)
                    )
                  }
                >
                  <p className="text-lg font-semibold hover:underline">
                    {owner[0].name}
                  </p>
                </Link>
              </div>
              <Link to="">
                <p className="text-xs hover:underline">4 tháng 6 lúc 11:50</p>
              </Link>
            </div>
          </div>
          <div className="flex sm:gap-5 gap-3">
            <div className="flex gap-2">
              <i className="fa-solid fa-seedling text-lg text-green"></i>
              <p className="text-lg text-green">{info.counterSeed}</p>
              <p className="text-lg text-green sm:block hidden">Mầm</p>
            </div>
            <div className="flex gap-2">
              <i className="fa-solid fa-flag text-lg text-red"></i>
              <p className="text-lg text-red">{info.counterFlag}</p>
              <p className="text-lg text-red sm:block hidden">Cờ</p>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="text-lg">{info.content}</div>
        <InteractionBar
          isSeed={isSeed}
          isFlag={isFlag}
          isBookmark={isBookmark}
          info={info}
        ></InteractionBar>
      </div>
    </>
  );
}

export default Post;
