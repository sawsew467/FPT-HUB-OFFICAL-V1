import React from "react";
import FAKE_TRENDING_LIST from "../data/trendingList";

function Trending() {
  return (
    <>
      <div className="w-1/5 hidden lg:block">
        <div className="bg-white p-5 flex flex-col rounded-xl w-full drop-shadow-xl dark:bg-[#242526] dark:text-white700">
          <h2 className="text-lg text-center mb-3">Nổi bật</h2>
          {FAKE_TRENDING_LIST.map((item, index) => (
            <div key={index} className="flex flex-col mb-1 last:mb-0">
              <p className="text-sm">Chủ đề nổi trội ở {item.position}</p>
              <span className="text-md font-medium">#{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trending;
