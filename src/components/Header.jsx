import React from "react";
import { BiSolidCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex  px-10 py-4 bg-[#161D29] text-white justify-between sm:px-2 items-center shade">
      <div className="flex gap-2 items-center ">
        <BiSolidCameraMovie className="text-5xl" />
        <p className="text-3xl font-bold"> MovieHub</p>
      </div>
      <div>
        <ul className="flex items-center justify-center font-bold gap-5">
          <li>
            <a href="https://github.com/nkashyap01">Github</a>
          </li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
