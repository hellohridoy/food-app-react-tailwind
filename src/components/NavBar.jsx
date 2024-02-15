import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/** Left side  */}
      <div className="flex items-center ">
        <div className="coursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Picup</p>
        </div>
      </div>

      {/** Search input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 w-full focus: outline-none"
          type="text"
          placeholder="Search food"
        />
      </div>
      {/** Cart Button */}
    </div>
  );
}

export default NavBar;
