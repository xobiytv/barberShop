import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";

export default function Chats() {
  return (
    <div>
      <div>
        <Link
          to={"/call"}
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
                <p className="text-xs mt-1">Chiqish</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
             
                <CallIcon className="text-[#FB9400]" />
             
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
      <div>
        <Link
          to={"/call"}
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
                <p className="text-xs mt-1">Rad qildi</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
             
                <CallIcon className="text-[#FB9400]" />
             
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
      <div>
        <Link
          to={"/call"}
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
                <p className="text-xs mt-1">Kirish</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6 flex-col  items-center flex justify-end mt-2">
             
                <CallIcon className="text-[#FB9400]" />
             
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </Link>
      </div>
    </div>
  );
}
