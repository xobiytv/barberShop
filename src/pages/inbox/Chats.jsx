import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

export default function Chats() {
  return (
    <div>
      <div>
        <Link
          to={"/message"}
          // className="bg-[#FB9400] text-[#fff] h-9 pl-5 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
          //     hover:scale-105 duration-300"
          // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
        >
          <div className="flex justify-between items-center p-4 bg-white ">
            <div className="w-1/6 mr-2 rounded-full items-center">
              <img
                className="rounded-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                alt=""
              />
            </div>
            <div className="w-4/6  ml-2">
              <div>
                <p className="font-bold ">Aleksandr Ilon</p>
                <p className="text-xs mt-1">Stempor incididunt</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
              <div className="box rounded-full w-5 h-5 flex bg-[#FB9400] justify-center items-center">
                <p className="text-[#fff] text-xs">1</p>
              </div>
              <p className=" mt-1 text-xs">20:00</p>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
      <div>
        <Link
          to={"/message"}
          // className="bg-[#FB9400] text-[#fff] h-9 pl-5 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
          //     hover:scale-105 duration-300"
          // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
        >
          <div className="flex justify-between items-center p-4 bg-white ">
            <div className="w-1/6 mr-2 rounded-full items-center">
              <img
                className="rounded-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                alt=""
              />
            </div>
            <div className="w-4/6  ml-2">
              <div>
                <p className="font-bold ">Aleksandr Ilon</p>
                <p className="text-xs mt-1">labore et dolore  </p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
              <div className="box rounded-full w-5 h-5 flex bg-[#FB9400] justify-center items-center">
                <p className="text-[#fff] text-xs">1</p>
              </div>
              <p className=" mt-1 text-xs">12:00</p>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
      <div>
        <Link
          to={"/message"}
          // className="bg-[#FB9400] text-[#fff] h-9 pl-5 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
          //     hover:scale-105 duration-300"
          // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
        >
          <div className="flex justify-between items-center p-4 bg-white ">
            <div className="w-1/6 mr-2 rounded-full items-center">
              <img
                className="rounded-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                alt=""
              />
            </div>
            <div className="w-4/6  ml-2">
              <div>
                <p className="font-bold ">Aleksandr Ilon</p>
                <p className="text-xs mt-1">Lorem ipsum </p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
              <div className="box rounded-full w-5 h-5 flex bg-[#FB9400] justify-center items-center">
                <p className="text-[#fff] text-xs">1</p>
              </div>
              <p className=" mt-1 text-xs">6.00</p>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
    </div>
  );
}
