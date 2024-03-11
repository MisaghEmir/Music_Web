import React from "react";

function HomePost({ item }) {
  return (
    <div>
      <div>
        <img src={item.image} className=" object-contain rounded-sm " style={{}} alt="" />
      </div>
    </div>
  );
}

export default HomePost;
