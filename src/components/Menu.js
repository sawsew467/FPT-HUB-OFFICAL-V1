import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  const choose = props.choose;
  return (
    <>
      <div className="lg:w-1/5 hidden sm:block w-1/4">
        <div className="bg-white p-5 flex flex-col rounded-xl w-full drop-shadow-xl dark:bg-[#242526]">
          <Link to="/home" className="">
            <div className="flex mb-5 hover:font-semibold">
              <i className="fa-solid fa-house text-lg text-[#1a2b5f] dark:text-white700"></i>
              <p
                className={
                  choose == 1
                    ? "text-lg ml-3 text-[#1a2b5f] font-semibold dark:text-white"
                    : "text-lg ml-3 text-[#1a2b5f] dark:text-white700"
                }
              >
                Trang chủ
              </p>
            </div>
          </Link>
          <Link to="/explore" className="">
            <div className="flex mb-5 hover:font-semibold">
              <i className="fa-solid fa-hashtag text-lg text-[#1a2b5f] dark:text-white700"></i>
              <p
                className={
                  choose == 2
                    ? "text-lg ml-3 text-[#1a2b5f] font-semibold dark:text-white"
                    : "text-lg ml-3 text-[#1a2b5f] dark:text-white700"
                }
              >
                Chủ đề
              </p>
            </div>
          </Link>
          <Link to="/notifications" className="">
            <div className="flex mb-5 hover:font-semibold">
              <i className="fa-solid fa-bell text-lg text-[#1a2b5f] dark:text-white700"></i>
              <p
                className={
                  choose == 3
                    ? "text-lg ml-3 text-[#1a2b5f] font-semibold dark:text-white"
                    : "text-lg ml-3 text-[#1a2b5f] dark:text-white700"
                }
              >
                Thông báo
              </p>{" "}
            </div>
          </Link>
          <Link to="/bookmark" className="">
            <div className="flex mb-5 hover:font-semibold">
              <i className="fa-solid fa-bookmark text-lg text-[#1a2b5f] dark:text-white700"></i>
              <p
                className={
                  choose == 4
                    ? "text-lg ml-3 text-[#1a2b5f] font-semibold dark:text-white"
                    : "text-lg ml-3 text-[#1a2b5f] dark:text-white700"
                }
              >
                Dấu trang
              </p>{" "}
            </div>
          </Link>
          <Link to="/settings" className="">
            <div className="flex mb-5 hover:font-semibold">
              <i className="fa-solid fa-gear text-lg text-[#1a2b5f] dark:text-white700"></i>
              <p
                className={
                  choose == 5
                    ? "text-lg ml-3 text-[#1a2b5f] font-semibold dark:text-white"
                    : "text-lg ml-3 text-[#1a2b5f] dark:text-white700"
                }
              >
                Cài đặt
              </p>{" "}
            </div>
          </Link>
          <button className="w-full px-3 py-2 bg-blue rounded-xl text-white text-lg transition-alldark:text-white700 cursor-not-allowed opacity-50">
            Đăng bài
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
