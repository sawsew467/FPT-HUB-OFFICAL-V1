import React from "react";

function MentionNoti() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between pt-5">
          <div className="flex gap-5 max-w-sm">
            <img
              className="h-[50px] w-[50px]"
              src={
                "https://icons-for-free.com/download-icon-business+costume+male+man+office+user+icon-1320196264882354682_512.png"
              }
            ></img>
            <p className="text-lg">
              <strong className="font-semibold">Nguyễn Nhật Anh</strong> vừa trả lời bình luận của bạn ở
              một bài viết.
            </p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="pt-5 flex justify-between">
          <div className="flex gap-5 max-w-sm">
            <img
              className="h-[50px] w-[50px]"
              src={
                "https://cdn-icons-png.flaticon.com/512/206/206853.png"
              }
            ></img>
            <p className="text-lg">
              <strong className="font-semibold">Phùng Vũ An Quân</strong> vừa trả lời bình luận của bạn ở
              một bài viết.
            </p>
          </div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
    </>
  );
}

export default MentionNoti;
