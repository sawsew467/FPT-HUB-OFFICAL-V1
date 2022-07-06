import React from "react";

function SystemsNoti() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between pt-5">
          <div className="flex gap-0 max-w-sm">
            <div className=" h-[50px] w-[80px] flex justify-center items-center">
              <i className="fa-solid fa-gears text-3xl text-orange"></i>
            </div>
            <p className="text-lg">
              Bạn vừa cập nhật thành công thông tin tài khoản
            </p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        
      </div>
    </>
  );
}

export default SystemsNoti;
