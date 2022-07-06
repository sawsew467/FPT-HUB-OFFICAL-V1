import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Menu from "../components/Menu";
import Trending from "../components/Trending";
import Header from "../parts/Header";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { postsSelector, usersSelector } from "../redux/selectors";

function Profile(props) {
  const [tartgetId, setTargetId] = useState(
    JSON.parse(window.localStorage.getItem("targetId"))
  );
  const targetUser = JSON.parse(window.localStorage.getItem("users")).filter(user => user.id === tartgetId);
  // const currentUser = targetUser[0];
  // const [postList, setPostList] = useState(
  //   JSON.parse(window.localStorage.getItem("posts"))
  // );
  const postList = useSelector(postsSelector);
  const currentId = JSON.parse(window.localStorage.getItem("currentUser")).id;
  const userList = useSelector(usersSelector);
  const currentUser = userList.filter(user => user.id === tartgetId);
  return (
    <>
      <div className={props.mode === true ? "dark" : "light"}>
        <Header></Header>
        <Jumbotron info={currentUser[0]}></Jumbotron>
        <div className="bg-zinc-200	z-10 dark:bg-black pt-2 sm:pt-0">
          <div className="mx-auto container lg-auto sm:p-7 p-0 flex justify-between items-start gap-7">
            <Menu></Menu>
            <div className="flex-1 min-h-screen">
              {postList.map((item, index) => {
                if (currentUser[0].postList.includes(item.id) === true)
                  return <Post key={index} info={item}></Post>;
              })}
            </div>
            <Trending></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
