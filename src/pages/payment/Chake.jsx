import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Paper from "@mui/material/Paper";


export default function () {
  return (
    <div>
      <div>
        <h1 className="font-bold grid-cols-1  m-5 text-2xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/ourserice"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Review Summery
        </h1>
      </div>
      <div className=" mr-4  ml-4  drop-shadow-xl bg-white mt-3 rounded-xl">
        <div className="flex pr-4  mt-3 pl-4 w-full justify-between">
          <p>Barber/Salon</p>
          <b>Barberella Inova</b>
        </div>
        <div className="flex pr-4  mt-3 pl-4 w-full justify-between">
          <p>Address</p>
          <b>0933 Novake Parkwary</b>
        </div>
        <div className="flex pr-4 mt-3  pl-4 w-full justify-between">
          <p>Name</p>
          <b>Nathan</b>
        </div>
        <div className="flex pr-4 mt-3  pl-4 w-full justify-between">
          <p>Phone </p>
          <b>(304) 444-2133</b>
        </div>
        <div className="flex pr-4 mt-3  pl-4 w-full justify-between">
          <p>Booking data</p>
          <b>Aprel 23, 2023</b>
        </div>
        <div className="flex pr-4 mt-3  pl-4 w-full justify-between">
          <p>Booking Hours</p>
          <b>11:00 PM</b>
        </div>
        <div className="flex pr-4 mt-2  pb-3   pl-4 w-full justify-between">
          <p>Specialist</p>
          <b>Athan Alehandr</b>
        </div>
      </div>

      <div className=" mr-4  ml-4  drop-shadow-xl bg-white mt-3 rounded-xl">
        <div className="flex pr-4 mt-5 pt-3 pl-4 w-full justify-between">
          <p>Haircut (Quiff)</p>
          <b>$6.00</b>
        </div>
        <div className="flex pr-4 mt-3  pl-4 w-full justify-between">
          <p>Hair Wash (Aloe Vera Shampoo)</p>
          <b>$5.50</b>
        </div>
        <div className="flex pr-4 mt-2 mb-2  pl-4 w-full justify-between">
          <p>Shaving (Thin Shoving)</p>
          <b>$4.50</b>
        </div>

        <hr />
        <div className="flex pr-4 mt-3  pb-3  pl-4 w-full justify-between">
          <p>Total </p>
          <b>$16.00</b>
        </div>
      </div>
      <div className="flex mr-4 mb-16 ml-4 justify-between drop-shadow-xl bg-white mt-3 rounded-xl">
        <div className="w-1/6 flex items-center">
          <img
            className="rounded-xl "
            src="https://logobank.uz:8005/media/logos_preview/Humo-01.jpg"
            alt=""
          />
        </div>
        <div className="w-4/6 flex items-center ml-2">
          <h6 className="font-bold  grid-cols-1  text-[#000000]">
            8600 **** **** 3231
          </h6>
        </div>{" "}
        <div className="w-1/6  flex justify-end mt-2">
          <Link
            to={"/salonprofel"}
            className="pl-5 pr-5  text-xl pt-1 text-[#FB9400] pb-1 text-end "
          >
            Change
          </Link>

          {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
        </div>
      </div>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "none",
        }}
        // elevation={3}
      >
        <div className="ml-4 mr-4 mb-5 bg-none">
          <Link
            to={"/"}
            variant="primary"
            type="Submit"
            className="bg-[#FB9400] w-full mt-5 text-center rounded-3xl text-white text-xl py-2 hover:scale-105 duration-300"
          >
            Continue
          </Link>
        </div>
      </Paper>
    </div>
  );
}
