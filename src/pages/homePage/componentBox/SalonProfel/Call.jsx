import React from 'react'
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Paper from "@mui/material/Paper";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import Face3Icon from "@mui/icons-material/Face3";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
// import Face6Icon from "@mui/icons-material/Face6";
import CallEndIcon from '@mui/icons-material/CallEnd';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";


export default function Call() {
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/ "}>
            <Icon className="mr-3" size={"30px"} icon={ic_keyboard_backspace} />
          </Link>
        </h1>
      </div>
      <div className="flex translate-y-12 justify-between flex-col items-center gap-5">
        <div>
          <img
            className="h-40  w-40 rounded-full "
            src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
            alt=""
          />
        </div>
        <b className="text-xl"> Barberrlla Inova</b>
        <p>02:28 minut</p>
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
        <div className="ml-5 mr-5 mb-5 bg-none">
          <ul className="flex justify-around mb-4">
            <li className=" ">
              <Link className="m-0 text-center" to={"/message"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#de3c2a] items-center  flex justify-center ">
                  <CallEndIcon
                    color="action"
                    sx={{ fontSize: 32, color: "#fff " }}
                  />
                </div>
                <br />
                {/* <b className="text-center">Make UP</b> */}
              </Link>
            </li>
            <li className=" ">
              <Link className="m-0 text-center" to={"/message"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#3068d7] items-center  flex justify-center ">
                  <VideocamOffIcon
                    color="action"
                    sx={{ fontSize: 32, color: "#fff " }}
                  />
                </div>
                <br />
                {/* <b className="text-center">Manicure</b> */}
              </Link>
            </li>
            <li className=" ">
              <Link className="m-0 text-center" to={"/message"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#FB9400] items-center  flex justify-center ">
                  <VolumeUpIcon
                    color="action"
                    // sx={{ color: "#FB9400 " }}
                    sx={{ fontSize: 37, color: "#fff " }}
                  />
                </div>
                <br />
              </Link>
            </li>
          </ul>
        </div>
      </Paper>
    </div>
  );
}
