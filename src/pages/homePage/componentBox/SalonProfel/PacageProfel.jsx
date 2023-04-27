import React from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
// import SendIcon from "@mui/icons-material/Send";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Icon } from "react-icons-kit";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";


const label = { inputProps: { "aria-label": "Checkbox demo" } };


export default function PacageProfel() {

  return (
    <div>
      <div className="ml-5 mr-5  mt-3 mb-3 ">
        {/* <Link className="pl-0 m-0" to={"/"}>
          <Icon
            className="mr-3  origin-top"
            size={"35px"}
            icon={ic_keyboard_backspace}
          />
        </Link> */}
        <div>
          <h1 className="font-bold mb-5 grid-cols-1   text-xl text-[#000000]">
            <Link className="pl-0 m-0" to={"/salonprofel"}>
              <Icon
                className="mr-3"
                size={"40px"}
                icon={ic_keyboard_backspace}
              />
            </Link>
            Book Now
          </h1>
        </div>

        <div className="rounded-2xl">
          <img
            className="h-48 w-full rounded-2xl "
            src="https://tezinfo.uz/uploads/companies/bBu2aiqtzPwFfZreSxTq.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="m-5 gap-5">
        <b className="text-2xl">Barbarela Inowa</b>
        <p className="text-xs mt-4 mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          minima quisquam atque accusamus rem, sit nostrum maxime officiis
          fugiat veritatis illum harum laborum sed error iure.
        </p>
      </div>
      <div className="m-5 mb-20 gap-5">
        <b className="text-xl">Service</b>
        <div className="flex justify-between">
          <ul className="m-0 p-0">
            <li>
              <Checkbox {...label} defaultChecked color="secondary" /> Haircut
            </li>
            <li>
              <Checkbox {...label} defaultChecked color="secondary" />{" "}
              Hairstyling
            </li>
            <li>
              <Checkbox {...label} defaultChecked color="secondary" /> Hair
              Coloring
            </li>
          </ul>
          <ul>
            <li>
              <Checkbox {...label} defaultChecked color="secondary" /> Shave
              Mustache
            </li>
            <li>
              <Checkbox {...label} defaultChecked color="secondary" /> Shave the
              Beard
            </li>
            <li>
              <Checkbox {...label} defaultChecked color="secondary" /> Facial
            </li>
          </ul>
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
            to={"/bookApply"}
            variant="primary"
            type="Submit"
            className="bg-[#FB9400] w-full mt-5 text-center rounded-3xl text-white text-xl py-2 hover:scale-105 duration-300"
          >
            Book Now - $125
          </Link>
        </div>
      </Paper>
    </div>
  );
}
