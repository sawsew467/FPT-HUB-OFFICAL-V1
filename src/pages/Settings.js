import React, { useRef, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Header from "../parts/Header";

function Settings(props) {
  const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem('currentUser')));
  const [avatar, setAvatar] = useState(
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/276141438_3044495935880852_6742214151226719057_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EuJsJOZ1YDwAX8TOz-E&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT_s5yTSB1tU7m5vmmwR7Ox-_FSXlyjduSw1cbvLmkcObA&oe=62BFFF1D"
  );
  const myRef = useRef(null);
  const handleAvatar = (e) => {
    // console.log(e.target.value);
    setAvatar(e.target.value);
  };
  return (
    <>
      <div className={props.mode===true ? "dark" : "light"}>
        <Header></Header>
        <Jumbotron info={currentUser}></Jumbotron>
        <div className="bg-zinc-200 dark:bg-black dark:text-white700 z-10">
          <div className="mx-auto container lg-auto sm:p-7 p-2 flex sm:flex-row flex-col justify-between items-start gap-7">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                Cập nhật thông tin tài khoản
              </h2>
              <div className="w-full flex sm:flex-row flex-col gap-2">
                <div className="sm:w-5/12">
                  <div className="flex sm:flex-row flex-col w-full gap-2 mt-2">
                    <div className="flex flex-col sm:w-7/12">
                      <p className="text-lg">
                        Họ<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                        placeholder="Trần Văn"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg">
                        Tên<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                        placeholder="Bảo Thắng"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2">
                    <p className="text-lg">
                      Mô tả bản thân<span className="text-red">*</span>
                    </p>
                    <textarea
                      type="text"
                      className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                      placeholder="Mô tả bản thân..."
                      cols="50"
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex w-full flex-col gap-2 mt-2">
                    <div className="flex flex-col sm:w-7/12">
                      <p className="text-lg">
                        Email address<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                        placeholder="Trần Văn"
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg">
                        Username<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                        placeholder="Bảo Thắng"
                      ></input>
                    </div>
                  </div>
                  <div className="flex w-full gap-2 mt-2">
                    <div className="flex flex-col w-7/12">
                      <p className="text-lg">
                        Email address<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 dark:border-slate-700 dark:bg-[#3a3b3c]"
                        placeholder="thangtvbde170145@fpt.edu.vn"
                      ></input>
                    </div>
                    <div className="flex flex-col opacity-0 cursor-default">
                      <p className="text-lg">
                        Username<span className="text-red">*</span>
                      </p>
                      <input
                        className="text-lg py-1 px-3 rounded-xl border-[1px] bg-neutral-100 outline-none placeholder:text-slate-400 text-slate-400 border-solid	border-slate-500 cursor-default"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  <p className="mt-2 text-lg">
                    <span className="text-red">*</span>Bắt buộc
                  </p>
                  <button className="mt-2 w-5/12 px-3 py-2 bg-blue rounded-xl text-white text-lg hover:scale-105 transition-all">
                    Lưu thông tin tài khoản
                  </button>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg mt-2 ">
                    Ảnh đại diện<span className="text-red">*</span>
                  </p>
                  <div className="px-5 bg-white w-2/4">
                    <img className="w-24 h-24 mx-auto" src={avatar}></img>
                  </div>
                  <input
                    className="mt-3"
                    type="file"
                    ref={myRef}
                    onChange={(e) => handleAvatar(e)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
