import React from "react";
import { Icon } from "react-icons-kit";
import { pencil } from "react-icons-kit/fa/pencil";
import Footer from "../homePage/Footer";
import { Link } from "react-router-dom";

import Navbar from "../homePage/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SecurityIcon from "@mui/icons-material/Security";
import LanguageIcon from "@mui/icons-material/Language";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";

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

export default function Profel() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <div className="flex mt-5 justify-center">
          <div className="w-32    flex  rounded-xl  ">
            <img
              className="w-full object-cover rounded-full"
              src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
              alt="Avatar Upload"
            />
            <label className="cursor-pointer translate-y-24 ">
              <span
                style={{ color: "#fff" }}
                className="focus:outline-none  bg-[#FB9400] rounded-xl  justify-end   py-1 px-2  hover:shadow-lg"
              >
                <Icon size={"100%"} icon={pencil} />
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <b className="text-xl">Daniel Austin</b>
        <p className="text-xs ">Danil_austin@gamil.com</p>
        <hr className="m-5" />
      </div>

      <div className="gap-5">
        <div>
          <Link className="" to="/editprofel">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <PersonIcon />
                <p className="font-medium">Profelni tahrirlash</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/notification">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <NotificationsIcon />
                <p className="font-medium">Bildirishnomalar</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/profel">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <AccountBalanceWalletIcon />
                <p className="font-medium">To`lov</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/security">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <SecurityIcon />
                <p className="font-medium">Xavfsizlik</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/language">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <LanguageIcon />
                <p className="font-medium">Til</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/privacypolicy">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <LocalPoliceIcon />
                <p className="font-medium">Maxfilik siyosati</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link className="" to="/invitefriends">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <PeopleAltIcon />
                <p className="font-medium">Do`stlarni taklif qilish</p>{" "}
              </div>

              <ArrowForwardIosIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div>
          <Link to="/admin">
            <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
              <div className="flex gap-2">
                <LogoutIcon sx={{ color: pink[500] }} />
                <p className="font-medium text-[red]">Chiqish</p>{" "}
              </div>

              {/* <ArrowForwardIosIcon /> */}
            </div>{" "}
          </Link>
        </div>

        <div>
          <div className="flex justify-between mt-2 itmes-center ml-5 mr-5">
            <div className="flex gap-2">
              <RemoveRedEyeIcon />
              <p className="font-medium">Qorong`i rejim</p>{" "}
            </div>

            <Switch {...label} defaultChecked color="warning" />
          </div>
        </div>
      </div>
      {/* <InviteFriends/> */}
      {/* <PrivacyPolicy /> */}
      {/* <Language /> */}
      {/* <Security /> */}
      {/* <Notification /> */}
      {/* <EditProfrl /> */}
      <Footer />
    </div>
  );
}
