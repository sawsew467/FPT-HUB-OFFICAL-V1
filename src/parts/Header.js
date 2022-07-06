import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import settings from "../assets/images/settings.svg";
import darkmode from "../assets/images/darkmode.svg";
import contribute from "../assets/images/contribute.svg";
import logout from "../assets/images/logout.svg";
import logo from "../assets/images/logo.svg";
import SearchBox from "../components/SearchBox";
import useClickOutside from "../customHooks/useClickedOutside";
import { useDispatch, useSelector } from "react-redux";
import { handleMoblieMenu, switchDarkMode } from "../redux/actions";
import { darkmodeSelector, moblieMenuSelector } from "../redux/selectors.js";
import MobileMenu from "../components/MobileMenu";

function Header(props) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem("currentUser"))
  );
  const shortName = (name) => {
    const words = name.split(" ");
    return words[words.length - 2] + " " + words[words.length - 1];
  };
  console.log(currentUser);
  const [showDropdown, setShowDropdown] = useState(false);
  const myRef = useRef(null);
  useClickOutside(myRef, () => setShowDropdown(false));
  const [isDarkmode, setIsDarkmode] = useState(false);
  const darkmode = useSelector(darkmodeSelector);
  const dispatch = useDispatch();
  const tmp = isDarkmode;
  const handleDarkmode = () => {
    setIsDarkmode(!isDarkmode);
    tmp === false
      ? dispatch(switchDarkMode(true))
      : dispatch(switchDarkMode(false));
  };
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const mobileMenuCallback = (data) => {
    setIsShowMobileMenu(data);
  };
  // const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white sm:drop-shadow-lg z-50 dark:bg-[#242526] ">
        <div className="container xl-auto mx-auto">
          <div className="sm:h-20 sm:pl-7 sm:pr-7 p-2 flex items-center justify-between gap-7">
            <div className="w-4/5 sm:w-1/5">
              <Link to="/home">
                <img className="" src={logo} alt=""></img>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:w-2/5">
              <SearchBox></SearchBox>
              <div
                className="flex-col gap-2 sm:hidden flex cursor-pointer"
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="w-[3.2rem] h-1 bg-orange"></div>
                <div className="w-[3.2rem] h-1 bg-orange"></div>
                <div className="w-[3.2rem] h-1 bg-orange"></div>
              </div>
              {isShowMobileMenu && (
                <MobileMenu
                  isShowMobileMenu={isShowMobileMenu}
                  parentsCallback={mobileMenuCallback}
                ></MobileMenu>
              )}
            </div>
            <div
              className="w-1/5 items-center justify-between relative sm:flex hidden"
              ref={myRef}
            >
              <img
                className="max-h-[50px]"
                src={currentUser.avatar}
                alt=""
              ></img>
              <p className="text-lg flex-1 ml-3 dark:text-white700">
                {shortName(currentUser.name)}
              </p>
              <i
                className="fa-solid fa-caret-down w-8 h-8 flex justify-center items-center hover:bg-slate-100 rounded-full cursor-pointer dark:text-white700 dark:hover:bg-slate-500"
                onClick={() => setShowDropdown(!showDropdown)}
              ></i>
              {showDropdown && (
                <div className="absolute right-0 top-14 p-5 bg-white dark:bg-[#242526] dark:text-white700 drop-shadow-lg rounded-xl min-w-[20rem]">
                  <div className="flex pb-5 border-b-[1px] border-slate-300	border-solid">
                    <img
                      className="max-h-[65px]"
                      src={currentUser.avatar}
                      alt=""
                    ></img>
                    <div className="flex flex-col justify-center ml-3">
                      <p className="text-2xl">{shortName(currentUser.name)}</p>
                      <Link
                        className="text-lg"
                        to="/profile"
                        alt=""
                        onClick={() =>
                          window.localStorage.setItem(
                            "targetId",
                            JSON.stringify(currentUser.id)
                          )
                        }
                      >
                        Xem hồ sơ
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="pt-5 flex items-center text-lg">
                      <div className="flex justify-center items-center h-10 w-10 bg-[#d9d9d9] rounded-full">
                        <i class="fa-solid fa-gear text-[#33394d] text-xl"></i>
                      </div>
                      <Link className="ml-3" alt="" to="/settings">
                        Cài đặt
                      </Link>
                    </div>
                    <div className="pt-5 flex items-center text-lg">
                      <div className="flex justify-center items-center h-10 w-10 bg-[#d9d9d9] rounded-full">
                        <i class="fa-solid fa-moon text-[#33394d] text-xl"></i>
                      </div>
                      <div
                        className="ml-3 cursor-pointer"
                        to=""
                        alt=""
                        onClick={handleDarkmode}
                      >
                        Darkmode
                        {isDarkmode ? ": ON" : ": OFF"}
                      </div>
                    </div>
                    <div className="pt-5 flex items-center text-lg">
                      <img src={contribute}></img>
                      <Link className="ml-3" to="" alt="">
                        Đóng góp
                      </Link>
                    </div>
                    <div className="pt-5 flex items-center text-lg">
                      <div className="flex justify-center items-center h-10 w-10 bg-[#d9d9d9] rounded-full">
                        <i class="fa-solid fa-right-from-bracket text-[#33394d] text-xl"></i>
                      </div>
                      <Link className="ml-3" to="/login" alt="">
                        Đăng xuất
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
