import React from "react";
import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function Upcoming() {

  return (
    <div>
      <div className="drop-shadow-xl p-4 bg-white mt-5 rounded-xl">
        <div className="flex mt-1 justify-between items-center">
          <b>Dec 22, 2022 - 10:00 PM</b>
          <div className="">
            <p className="text-xs">Remind me</p>
            <Switch {...label} defaultChecked color="warning" />
          </div>
          
        </div>
        <hr className="m-3" />
        <div className="flex justify-between ">
          <div className="w-2/6 mr-2 rounded-xl items-center">
            <img
              className="rounded-xl"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt=""
            />
          </div>
          <div className="w-4/6  ml-2">
            <div>
              <b className="font-extrabold">Aleksandr Ilon</b>
              <p className=" text-xs">Jizzax orom bozor 23-uy</p>
              <p className="text-xs">Services:</p>
              <p className="text-[#FB9400] text-xs">
                Undercut Haircut, Regular Shoving, Natural Hair Wash
              </p>
            </div>
          </div>{" "}
        </div>
        <hr className="m-3" />
        <div className="flex justify-between">
          {/* <div className=" bg-none border-2 mt-3 border-[#FB9400] rounded-3xl hover:scale-105 duration-300">
            <Link
              to={"/"}
              variant="primary"
              type="Submit"
              className="text-[#FB9400] border-spacing-1 w-full  text-center  p-4 pb-2 pt-2 "
            >
              Add New Card
            </Link>
          </div> */}

          <div className="rounded-3xl border-2 border-[#FB9400] bg-none   p-4 pb-2 pt-2 text-[#FB9400] hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1  text-xs"
            >
              Cancel Booking
            </Link>
          </div>
          <div className="rounded-3xl bg-none  bg-[#FB9400] p-4 pb-2 pt-2 text-white hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1   text-xs"
            >
              View E-Receipt
            </Link>
          </div>
        </div>
      </div>
      <div className="drop-shadow-xl p-4 bg-white mt-8 rounded-xl">
        <div className="flex mt-1 justify-between items-center">
          <b>Dec 22, 2022 - 10:00 PM</b>
          <div className="">
            <p className="text-xs">Remind me</p>
            <Switch {...label} defaultChecked color="warning" />
          </div>
          
        </div>
        <hr className="m-3" />
        <div className="flex justify-between ">
          <div className="w-2/6 mr-2 rounded-xl items-center">
            <img
              className="rounded-xl"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt=""
            />
          </div>
          <div className="w-4/6  ml-2">
            <div>
              <b className="font-extrabold">Aleksandr Ilon</b>
              <p className=" text-xs">Jizzax orom bozor 23-uy</p>
              <p className="text-xs">Services:</p>
              <p className="text-[#FB9400] text-xs">
                Undercut Haircut, Regular Shoving, Natural Hair Wash
              </p>
            </div>
          </div>{" "}
        </div>
        <hr className="m-3" />
        <div className="flex justify-between">
          {/* <div className=" bg-none border-2 mt-3 border-[#FB9400] rounded-3xl hover:scale-105 duration-300">
            <Link
              to={"/"}
              variant="primary"
              type="Submit"
              className="text-[#FB9400] border-spacing-1 w-full  text-center  p-4 pb-2 pt-2 "
            >
              Add New Card
            </Link>
          </div> */}

          <div className="rounded-3xl border-2 border-[#FB9400] bg-none   p-4 pb-2 pt-2 text-[#FB9400] hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1  text-xs"
            >
              Cancel Booking
            </Link>
          </div>
          <div className="rounded-3xl bg-none  bg-[#FB9400] p-4 pb-2 pt-2 text-white hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1   text-xs"
            >
              View E-Receipt
            </Link>
          </div>
        </div>
      </div>
      <div className="drop-shadow-xl p-4 bg-white mt-8 rounded-xl">
        <div className="flex mt-1 justify-between items-center">
          <b>Dec 22, 2022 - 10:00 PM</b>
          <div className="">
            <p className="text-xs">Remind me</p>
            <Switch {...label} defaultChecked color="warning" />
          </div>
          
        </div>
        <hr className="m-3" />
        <div className="flex justify-between ">
          <div className="w-2/6 mr-2 rounded-xl items-center">
            <img
              className="rounded-xl"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt=""
            />
          </div>
          <div className="w-4/6  ml-2">
            <div>
              <b className="font-extrabold">Aleksandr Ilon</b>
              <p className=" text-xs">Jizzax orom bozor 23-uy</p>
              <p className="text-xs">Services:</p>
              <p className="text-[#FB9400] text-xs">
                Undercut Haircut, Regular Shoving, Natural Hair Wash
              </p>
            </div>
          </div>{" "}
        </div>
        <hr className="m-3" />
        <div className="flex justify-between">
          {/* <div className=" bg-none border-2 mt-3 border-[#FB9400] rounded-3xl hover:scale-105 duration-300">
            <Link
              to={"/"}
              variant="primary"
              type="Submit"
              className="text-[#FB9400] border-spacing-1 w-full  text-center  p-4 pb-2 pt-2 "
            >
              Add New Card
            </Link>
          </div> */}

          <div className="rounded-3xl border-2 border-[#FB9400] bg-none   p-4 pb-2 pt-2 text-[#FB9400] hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1  text-xs"
            >
              Cancel Booking
            </Link>
          </div>
          <div className="rounded-3xl bg-none  bg-[#FB9400] p-4 pb-2 pt-2 text-white hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1   text-xs"
            >
              View E-Receipt
            </Link>
          </div>
        </div>
      </div>
      <div className="drop-shadow-xl p-4 bg-white mt-8 rounded-xl">
        <div className="flex mt-1 justify-between items-center">
          <b>Dec 22, 2022 - 10:00 PM</b>
          <div className="">
            <p className="text-xs">Remind me</p>
            <Switch {...label} defaultChecked color="warning" />
          </div>
          
        </div>
        <hr className="m-3" />
        <div className="flex justify-between ">
          <div className="w-2/6 mr-2 rounded-xl items-center">
            <img
              className="rounded-xl"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt=""
            />
          </div>
          <div className="w-4/6  ml-2">
            <div>
              <b className="font-extrabold">Aleksandr Ilon</b>
              <p className=" text-xs">Jizzax orom bozor 23-uy</p>
              <p className="text-xs">Services:</p>
              <p className="text-[#FB9400] text-xs">
                Undercut Haircut, Regular Shoving, Natural Hair Wash
              </p>
            </div>
          </div>{" "}
        </div>
        <hr className="m-3" />
        <div className="flex justify-between">
          {/* <div className=" bg-none border-2 mt-3 border-[#FB9400] rounded-3xl hover:scale-105 duration-300">
            <Link
              to={"/"}
              variant="primary"
              type="Submit"
              className="text-[#FB9400] border-spacing-1 w-full  text-center  p-4 pb-2 pt-2 "
            >
              Add New Card
            </Link>
          </div> */}

          <div className="rounded-3xl border-2 border-[#FB9400] bg-none   p-4 pb-2 pt-2 text-[#FB9400] hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1  text-xs"
            >
              Cancel Booking
            </Link>
          </div>
          <div className="rounded-3xl bg-none  bg-[#FB9400] p-4 pb-2 pt-2 text-white hover:scale-105 duration-300">
            <Link
              to={"/chake"}
              variant="primary"
              type="Submit"
              className=" w-full text-center rounded-3xl p-2 pb-1 pt-1   text-xs"
            >
              View E-Receipt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
