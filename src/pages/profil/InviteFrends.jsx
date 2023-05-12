import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";

export default function SalonMessage() {
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/profel "}>
            <Icon className="mr-4" size={"30px"} icon={ic_keyboard_backspace} />
            Invite Frends
          </Link>
        </h1>
      </div>
      <div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6  flex justify-end mt-2">
              <Link
                to={"/message"}
                className="bg-[#FB9400] text-[#fff] h-9 pl-4 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
                  hover:scale-105 duration-300"
                // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
              >
                Invite
              </Link>

              {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="rounded-3xl border-2 border-[#FB9400] bg-none   text-[#FB9400] hover:scale-105 duration-300">
              <Link
                to={"/chake"}
                variant="primary"
                type="Submit"
                className=" w-full text-center rounded-3xl p-2 pl-3 pr-3 pt-1 pb-1"
              >
                Invited
              </Link>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="rounded-3xl border-2 border-[#FB9400] bg-none   text-[#FB9400] hover:scale-105 duration-300">
              <Link
                to={"/chake"}
                variant="primary"
                type="Submit"
                className=" w-full text-center rounded-3xl p-2 pl-3 pr-3 pt-1 pb-1"
              >
                Invited
              </Link>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="rounded-3xl border-2 border-[#FB9400] bg-none   text-[#FB9400] hover:scale-105 duration-300">
              <Link
                to={"/chake"}
                variant="primary"
                type="Submit"
                className=" w-full text-center rounded-3xl p-2 pl-3 pr-3 pt-1 pb-1"
              >
                Invited
              </Link>
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6  flex justify-end mt-2">
              <Link
                to={"/message"}
                className="bg-[#FB9400] text-[#fff] h-9 pl-4 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
                  hover:scale-105 duration-300"
                // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
              >
                Invite
              </Link>

              {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
        <div>
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
                <p className="font-bold text-xl">Aleksandr Ilon</p>
                <p>+998 (99) 123-12-33</p>
                {/* <p className="text-[#FB9400]">$128</p> */}
              </div>
            </div>{" "}
            <div className="w-1/6  flex justify-end mt-2">
              <Link
                to={"/message"}
                className="bg-[#FB9400] text-[#fff] h-9 pl-4 pr-4 pt-1 pb-1 text-center rounded-3xl text-white py-2
                  hover:scale-105 duration-300"
                // className="pl-5 text-[#FB9400] pr-5 pt-1 pb-1 text-end "
              >
                Invite
              </Link>

              {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
            </div>
          </div>
          <hr className="ml-4 mr-4" />
        </div>
      </div>
    </div>
  );
}
