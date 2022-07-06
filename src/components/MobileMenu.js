import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { switchDarkMode } from "../redux/actions";
import { darkmodeSelector } from "../redux/selectors";
import logoWhite from "../assets/images/logo white.svg";

function MobileMenu(props) {
  const [isDarkmode, setIsDarkmode] = useState(useSelector(darkmodeSelector));
  const dispatch = useDispatch();
  const tmp = isDarkmode;
  const handleDarkmode = () => {
    setIsShowMobileMenu(!isShowMobileMenu);
    setIsDarkmode(!isDarkmode);
    tmp === false
      ? dispatch(switchDarkMode(true))
      : dispatch(switchDarkMode(false));
  };
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(
    props.isShowMobileMenu
  );
  console.log(isShowMobileMenu);
  const sendData = () => {
    props.parentsCallback(isShowMobileMenu);
  };
  useEffect(() => {
    sendData();
  }, [isShowMobileMenu]);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-orange flex flex-col items-center overscroll-y-none">
        <div className="w-full flex h-[70px] justify-between items-center p-2">
          <div className="">
            <Link to="/home">
              <img className="" src={logoWhite} alt=""></img>
            </Link>
          </div>
          <div
            className="flex-col gap-2 sm:hidden flex cursor-pointer"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            <div className="w-[3.2rem] h-1 bg-white"></div>
            <div className="w-[3.2rem] h-1 bg-white"></div>
            <div className="w-[3.2rem] h-1 bg-white"></div>
          </div>
        </div>
        <Link to="/home" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-house text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Trang chủ</p>
          </div>
        </Link>
        <Link to="/explore" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-hashtag text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Chủ đề</p>
          </div>
        </Link>
        <Link to="/notifications" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-bell text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Thông báo</p>
          </div>
        </Link>
        <Link to="/bookmark" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-bookmark text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Dấu trang</p>
          </div>
        </Link>
        <Link to="/settings" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-gear text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Cài đặt</p>
          </div>
        </Link>
        <Link to="/profile" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i class="fa-solid fa-user text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Xem hồ sơ</p>
          </div>
        </Link>
        <Link to="" className="py-3 w-full" onClick={handleDarkmode}>
          <div className="flex hover:font-semibold justify-center">
            <i className="fa-solid fa-moon text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">
              Darkmode
              {isDarkmode ? ": ON" : ": OFF"}
            </p>
          </div>
        </Link>
        <Link to="/contribute" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i class="fa-solid fa-handshake-angle text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Đóng góp</p>
          </div>
        </Link>
        <Link to="/login" className="py-3 w-full">
          <div className="flex hover:font-semibold justify-center">
            <i class="fa-solid fa-right-from-bracket text-2xl text-white"></i>
            <p className="text-2xl ml-3 font-semibold text-white">Đăng xuất</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
