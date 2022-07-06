import React from "react";

function SearchBox() {
  return (
    <>
      <div className="relative sm:w-full sm:block hidden">
        <input
          className="w-full text-lg bg-neutral-100 dark:border-slate-700 dark:bg-[#3a3b3c] py-3 sm:pr-4 sm:pl-10 pl-[3.2rem] rounded-xl outline-none placeholder:text-slate-400 text-slate-400 border-[1px]"
          type="text"
          placeholder="Tìm kiếm"
        ></input>
        <div className="absolute left-0 top-0 h-[54px] w-[54px] flex items-center justify-center">
          <i className="fa-solid fa-magnifying-glass text-slate-400"></i>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
