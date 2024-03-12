import React from "react";

function TopSingers({ item }) {
  return (
    <div className="mt-7">
      <div className=" relative">
        <div
          className=" absolute w-full h-full top-0 left-0 bg-bg_coverblack_300 
      border border-color_border_600 p-3 flex flex-col justify-between rounded-xl"
        >
          <p className="text-sm">Verified Artist </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <img
          src={item.image}
          className=" h-40 object-cover w-full rounded-xl "
          alt=""
        />
      </div>
      <div className="mt-3">
        <p className="text-sm overflow-hidden mt-1 text-textSecond_400 flex gap-2 items-center text-wrap ">
          {item.singer}
        </p>
      </div>
    </div>
  );
}

export default TopSingers;
