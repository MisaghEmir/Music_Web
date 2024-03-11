import React from "react";

function HomePost({ item }) {
  return (
    <div>
      <div>
        <img
          src={item.image}
          className="  object-cover w-40 h-32 rounded-sm "
          style={{ aspectRatio: "4/4" }}
          alt=""
        />
      </div>
      <div>
        <b className="text-sm overflow-hidden text-wrap wr">{item.name}</b>
      </div>
    </div>
  );
}

export default HomePost;
