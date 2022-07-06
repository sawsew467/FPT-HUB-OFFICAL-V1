import React from "react";
import { useSelector } from "react-redux";
import Composer from "../components/Composer";
import Menu from "../components/Menu";
import Trending from "../components/Trending";
import FAKE_TRENDING_LIST from "../data/trendingList";
import Header from "../parts/Header";
import { darkmodeSelector } from "../redux/selectors";

function Explore(props) {
  return (
    <>
      <div className={props.mode===true ? "dark" : "light"}>
        <Header></Header>
        <div className="sm:mt-20 mt-[70px] bg-zinc-200	z-10 dark:bg-black min-h-screen">
          <div className="mx-auto container lg-auto sm:p-7 flex justify-between items-start gap-7">
            <Menu choose={2}></Menu>
            <div className="flex-1">
              <div className="bg-white dark:bg-[#242526] dark:text-white700 flex flex-col sm:rounded-xl drop-shadow-xl w-full">
                <img
                  className="w-full sm:rounded-tl-xl sm:rounded-tr-xl"
                  src={require("../assets/images/banner.png")}
                  alt=""
                ></img>
                <div className="sm:p-5 p-2">
                  {FAKE_TRENDING_LIST.map((item, index) => (
                    <div key={index} className="flex flex-col mb-1 last:mb-0 relative">
                      <p className="text-sm">
                        Chủ đề nổi trội ở {item.position}
                      </p>
                      <span className="text-md font-medium">#{item.tag}</span>
                      <i className="fa-solid fa-ellipsis absolute top-0 right-0 text-md"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Trending></Trending>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
