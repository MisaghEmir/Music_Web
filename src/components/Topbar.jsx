import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { RiLoginCircleLine } from "react-icons/ri";

function Topbar() {
  return (
    <div className="p-5 px-7 flex justify-between items-center">
      <div>
        <p className=" text-2xl font-bold">Good morning</p>
      </div>
      <div className="flex gap-4">
        <i className=" bg-bg_900 p-1 text-xl rounded-full">
          <MdNotificationsActive />
        </i>
        <i className=" bg-bg_900 p-1 text-xl rounded-full">
          <RiLoginCircleLine />
        </i>
      </div>
    </div>
  );
}

export default Topbar;
