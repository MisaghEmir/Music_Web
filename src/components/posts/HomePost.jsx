import React from "react";

function HomePost({ item }) {
  return (
    <div>
      <div>
        <img
          src={item.image}
          className=" h-44 object-cover w-96 md:w-80 rounded-sm "
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
