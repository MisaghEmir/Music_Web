import React from "react";

function HomePost({ item }) {
  return (
    <div className=" cursor-pointer">
      <div className=" relative">
        <div
          className=" absolute w-full h-full top-0 left-0 bg-bg_coverblack_200 
        border border-color_border_600 flex justify-end items-start"
        >
          <div
            className=" text-black text-[14px] font-bold rounded-md flex items-center justify-center mt-2 mr-2"
            style={{ backgroundColor: "rgb(211, 211, 211)" }}
          >
            <small className="p-1 pt-0 text-xs">playlist</small>
          </div>
        </div>
        <img
          src={item.image}
          className=" h-44 object-cover w-96  md:w-80 rounded-sm "
          alt=""
        />
      </div>
      <div className="mt-2">
        <b className="text-sm overflow-hidden text-wrap ">{item.name}</b>
        <p className="text-sm overflow-hidden mt-1 text-textSecond_400 flex gap-2 items-center text-wrap ">
          {item.singer}
          <small className=" bg-stone-700 text-textSecond_50 px-2 p-1 text-xs rounded-lg">
            LYRIC
          </small>
        </p>
      </div>
    </div>
  );
}

export default HomePost;
