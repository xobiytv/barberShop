import React from "react";
import { Link } from "react-router-dom";
// import { alpha, styled } from "@mui/material/styles";
// import { pink } from "@mui/material/colors";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const data = [
  {
    name: "Aleksandr Ilon",
    address: "Jizzax orom bozor 23-uy",
    services: "Undercut Haircut, Regular Shoving, Natural Hair Wash",
    messageCount: 0,
    viewCount: 0,
    phoneCount: 0,
    bookmarkCount: 0,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    name: "Aleksandr Ilon",
    address: "Jizzax orom bozor 23-uy",
    services: "Undercut Haircut, Regular Shoving, Natural Hair Wash",
    messageCount: 0,
    viewCount: 0,
    phoneCount: 0,
    bookmarkCount: 0,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    name: "Aleksandr Ilon",
    address: "Jizzax orom bozor 23-uy",
    services: "Undercut Haircut, Regular Shoving, Natural Hair Wash",
    messageCount: 0,
    viewCount: 0,
    phoneCount: 0,
    bookmarkCount: 0,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  {
    name: "Aleksandr Ilon",
    address: "Jizzax orom bozor 23-uy",
    services: "Undercut Haircut, Regular Shoving, Natural Hair Wash",
    messageCount: 0,
    viewCount: 0,
    phoneCount: 0,
    bookmarkCount: 0,
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
  // Add more data objects as needed
];

const label = { inputProps: { "aria-label": "Color switch demo" } };

export default function Faol() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Tamomlanmagan e'lonlar</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) => (
          <Grid item xs={4} key={index}>
            <div className="drop-shadow-xl p-4 bg-white mt-5 rounded-xl">
              <div className="flex justify-between">
                <div className="w-2/6 mr-2 rounded-xl items-center">
                  <img className="rounded-xl" src={item.image} alt="" />
                </div>
                <div className="w-4/6 ml-2">
                  <div>
                    <b className="font-extrabold">{item.name}</b>
                    <p className="text-xs">{item.address}</p>
                    <p className="text-xs">Services:</p>
                    <p className="text-[#FB9400] text-xs">{item.services}</p>
                  </div>
                </div>
              </div>
              <hr className="m-3" />
              <div>
                <ul className="flex text-xs justify-around">
                  <li>
                    <Link to="">
                      <MessageIcon /> {item.messageCount}
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <RemoveRedEyeIcon /> {item.viewCount}
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <PhoneIcon /> {item.phoneCount}
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <BookmarkAddedIcon /> {item.bookmarkCount}
                    </Link>
                  </li>
                </ul>
              </div>
              <hr className="m-3" />
              <div className="flex justify-between">
                <div className="rounded-3xl border-2 border-[#FB9400] bg-none p-4 pb-2 pt-2 text-[#FB9400] hover:scale-105 duration-300">
                  <Link
                    to={"/chake"}
                    variant="primary"
                    type="Submit"
                    className="w-full text-center rounded-3xl p-2 pb-1 pt-1 text-xs"
                  >
                   Davom etirish
                  </Link>
                </div>
                <div className="rounded-3xl bg-none bg-[#FB9400] p-4 pb-2 pt-2 text-white hover:scale-105 duration-300">
                  <Link
                    to={"/chake"}
                    variant="primary"
                    type="Submit"
                    className="w-full text-center rounded-3xl p-2 pb-1 pt-1 text-xs"
                  >
                    Tahrirlash
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
