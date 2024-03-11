import React from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { SiGitbook } from "react-icons/si";
import { MdWebStories } from "react-icons/md";

function Sidebar() {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className=" bg-background_box rounded-lg">
        <ul className="p-5 grid gap-5 playfair ">
          <li className="flex gap-4 items-center cursor-pointer">
            <GoHomeFill className="text-2xl" />
            <p className="flex items-center">KordiSong</p>
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            <GoSearch className="text-2xl" />
            <p className="flex items-center">Search</p>
          </li>
        </ul>
      </div>
      <div className=" bg-background_box rounded-lg">
        <ul className="p-5 grid gap-5 playfair ">
          <li className="flex gap-4 items-center cursor-pointer">
            <MdWebStories className="text-2xl" />
            <p className="flex items-center">Your Library</p>
          </li>
          <li className="flex gap-4 items-center cursor-pointer">
            <GoSearch className="text-2xl" />
            <p className="flex items-center">Search</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
