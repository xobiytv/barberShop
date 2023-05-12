import React from 'react'
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
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

export default function Security() {
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/profel "}>
            <Icon className="mr-4" size={"30px"} icon={ic_keyboard_backspace} />
            Security
          </Link>
        </h1>
      </div>
      <div>
        <div className="flex justify-between mt-2 itmes-center ml-5">
          <p className="font-medium">Remember me</p>{" "}
          <Switch {...label} defaultChecked color="warning" />
        </div>
        <div className="flex justify-between mt-2 itmes-center ml-5">
          <p className="font-medium">Face ID</p>{" "}
          <Switch {...label} defaultChecked color="warning" />
        </div>
        <div className="flex justify-between mt-2 itmes-center ml-5">
          <p className="font-medium">Biomettic ID</p>{" "}
          <Switch {...label} defaultChecked color="warning" />
        </div>
        <div className="ml-4 mr-4 mb-5 bg-none">
          <Link
            to={"/"}
            variant="primary"
            type="Submit"
            className="text-[#FB9400] w-full mt-5 text-center rounded-3xl bg-[#FDF1DF] text-xl py-2 hover:scale-105 duration-300"
          >
            Change Password
          </Link>
        </div>
      </div>
    </div>
  );
}
