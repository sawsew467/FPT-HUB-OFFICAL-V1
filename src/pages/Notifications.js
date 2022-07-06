import React, { useState } from "react";
import { useSelector } from "react-redux";
import Composer from "../components/Composer";
import MentionNoti from "../components/MentionNoti";
import SystemsNoti from "../components/SystemsNoti";
import Menu from "../components/Menu";
import Trending from "../components/Trending";
import Header from "../parts/Header";
import { darkmodeSelector } from "../redux/selectors";

function Notifications(props) {
  const [option, setoption] = useState(1);
  return (
    <>
      <div className={props.mode===true ? "dark" : "light"}>
        <Header></Header>
        <div className="sm:mt-20 mt-[70px] bg-zinc-200	z-10 dark:bg-black">
          <div className="mx-auto container lg-auto sm:p-7 flex justify-between items-start gap-7">
            <Menu choose={3}></Menu>
            <div className="flex-1 min-h-screen	">
              <div className="bg-white dark:bg-[#242526] dark:text-white700 sm:p-5 p-2 flex flex-col sm:rounded-xl sm:drop-shadow-xl w-full">
                <h2 className="text-2xl sm:mb-3 mb-2">Thông báo</h2>
                <div className="flex border-b-2 border-black">
                  <div
                    className="w-1/2 flex flex-col items-center cursor-pointer"
                    onClick={() => setoption(1)}
                  >
                    <p className="text-center text-lg pb-2">Đề cập</p>
                    {option === 1 ? (
                      <div className="h-2 rounded-tl-xl rounded-tr-xl w-3/12 bg-blue"></div>
                    ) : (
                      <div className="h-2 rounded-tl-xl rounded-tr-xl w-3/12 bg-stone-500"></div>
                    )}
                  </div>
                  <div
                    className="w-1/2 flex flex-col items-center cursor-pointer"
                    onClick={() => setoption(2)}
                  >
                    <p className="text-center text-lg pb-2">Hệ thống</p>
                    {option === 2 ? (
                      <div className="h-2 rounded-tl-xl rounded-tr-xl w-3/12 bg-blue"></div>
                    ) : (
                      <div className="h-2 rounded-tl-xl rounded-tr-xl w-3/12 bg-stone-500"></div>
                    )}
                  </div>
                </div>
                {
                  option === 1 ? <MentionNoti></MentionNoti> : <SystemsNoti></SystemsNoti>
                }
              </div>
            </div>
            <Trending></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
