import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incSeed,
  incFlag,
  handleMarkPost,
  handleSeed,
  handleFlag,
} from "../redux/actions";
import { postsSelector, usersSelector } from "../redux/selectors";

function InteractionBar(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const postList = useSelector(postsSelector);
  const userList = useSelector(usersSelector);
  const isSeed = props.isSeed;
  const isFlag = props.isFlag;
  const isBookmark = props.isBookmark;
  const dispatch = useDispatch();
  const seedClick = () => {
    isFlag && flagClick();
    const item = postList.filter((post) => post.id === props.info.id);
    let newPost = item[0];
    isSeed ? newPost.counterSeed-- : newPost.counterSeed++;
    let newPostList = [];
    for (let item of postList) {
      if (item.id !== newPost.id) {
        newPostList.push(item);
      } else {
        newPostList.push(newPost);
      }
    }
    dispatch(incSeed(newPostList));
    //
    const item1 = userList.filter((user) => user.id === currentUser.id);
    if (item1[0].seedList.includes(props.info.id) === true) {
      item1[0].seedList.splice(item1[0].seedList.indexOf(props.info.id), 1);
    } else {
      item1[0].seedList.push(props.info.id);
    }
    const newUsers = [];
    for (let user of userList) {
      if (user.id !== item1[0].id) {
        newUsers.push(user);
      } else {
        newUsers.push(item1[0]);
      }
    }
    dispatch(handleSeed(newUsers));
  };
  const flagClick = () => {
    isSeed && seedClick();
    //counter
    const item = postList.filter((post) => post.id === props.info.id);
    let newPost = item[0];
    // newPost.counterFlag++;
    isFlag ? newPost.counterFlag-- : newPost.counterFlag++;
    let newPostList = [];
    for (let item of postList) {
      if (item.id !== newPost.id) {
        newPostList.push(item);
      } else {
        newPostList.push(newPost);
      }
    }
    dispatch(incFlag(newPostList));
    //
    const item1 = userList.filter((user) => user.id === currentUser.id);
    if (item1[0].flagList.includes(props.info.id) === true) {
      item1[0].flagList.splice(item1[0].flagList.indexOf(props.info.id), 1);
    } else {
      item1[0].flagList.push(props.info.id);
    }
    const newUsers = [];
    for (let user of userList) {
      if (user.id !== item1[0].id) {
        newUsers.push(user);
      } else {
        newUsers.push(item1[0]);
      }
    }
    dispatch(handleFlag(newUsers));
  };
  const commentClick = () => {};
  const bookmarkClick = () => {
    const item = userList.filter((user) => user.id === currentUser.id);
    if (item[0].bookmarkList.includes(props.info.id) === true) {
      item[0].bookmarkList.splice(
        item[0].bookmarkList.indexOf(props.info.id),
        1
      );
    } else {
      item[0].bookmarkList.push(props.info.id);
    }
    const newUsers = [];
    for (let user of userList) {
      if (user.id !== item[0].id) {
        newUsers.push(user);
      } else {
        newUsers.push(item[0]);
      }
    }
    dispatch(handleMarkPost(newUsers));
  };
  return (
    <>
      <div className="sm:pt-4 pt-2 border-t-[1px] flex ">
        {isSeed ? (
          <div
            className="w-1/4 flex justify-center items-center border-r-[1px] cursor-pointer"
            onClick={seedClick}
          >
            <i className="fa-solid fa-seedling text-lg mr-3 text-green"></i>
            <p className="text-lg text-green hidden sm:inline">Tặng mầm</p>
          </div>
        ) : (
          <div
            className="w-1/4 flex justify-center items-center border-r-[1px] cursor-pointer"
            onClick={seedClick}
          >
            <i className="fa-solid fa-seedling text-lg mr-3 text-slate-400"></i>
            <p className="text-lg text-slate-400 hidden sm:inline">Tặng mầm</p>
          </div>
        )}
        {isFlag ? (
          <div
            className="w-1/4 flex justify-center items-center border-r-[1px] cursor-pointer"
            onClick={flagClick}
          >
            <i className="fa-solid fa-flag text-lg mr-3 text-red"></i>
            <p className="text-lg text-red hidden sm:inline">Cắm cờ</p>
          </div>
        ) : (
          <div
            className="w-1/4 flex justify-center items-center border-r-[1px] cursor-pointer"
            onClick={flagClick}
          >
            <i className="fa-solid fa-flag text-lg mr-3 text-slate-400"></i>
            <p className="text-lg text-slate-400 hidden sm:inline">Cắm cờ</p>
          </div>
        )}
        <div
          className="w-1/4 flex justify-center items-center border-r-[1px] cursor-pointer"
          onClick={commentClick}
        >
          <i className="fa-solid fa-comment text-lg mr-3 text-slate-400 dark:text-[#94a3b8]"></i>
          <p className="text-lg text-slate-400 dark:text-[#94a3b8] hidden sm:inline">
            Bình luận
          </p>
        </div>
        {isBookmark ? (
          <div
            className="w-1/4 flex justify-center items-center cursor-pointer"
            onClick={bookmarkClick}
          >
            <i className="fa-solid fa-bookmark text-lg mr-3 text-blue"></i>
            <p className="text-lg text-blue hidden sm:inline">Lưu bài</p>
          </div>
        ) : (
          <div
            className="w-1/4 flex justify-center items-center cursor-pointer"
            onClick={bookmarkClick}
          >
            <i className="fa-solid fa-bookmark text-lg mr-3 text-slate-400"></i>
            <p className="text-lg text-slate-400 hidden sm:inline">Lưu bài</p>
          </div>
        )}
      </div>
    </>
  );
}

export default InteractionBar;
