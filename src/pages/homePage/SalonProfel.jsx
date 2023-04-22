import React from 'react'
import Slider from "react-slick";
// import List from "@mui/material/List";
import PlaceIcon from "@mui/icons-material/Place";
import StarHalfIcon from "@mui/icons-material/StarHalf";
// import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import ChatIcon from '@mui/icons-material/Chat';
import CallIcon from "@mui/icons-material/Call";
// import PlaceIcon from "@mui/icons-material/Place";
import SendIcon from "@mui/icons-material/Send";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Icon } from "react-icons-kit";
import './componentBox/SalonProfel.css'
import About from './componentBox/SalonNav'
export default function SalonProfel() {
    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

  return (
    <div>
      <div className="h-48 ml-5 mr-5  mt-8 ">
        <Slider className=" h-48 " {...settings}>
          <div className="rounded-2xl">
            <img
              className="h-48 w-full rounded-2xl "
              src="https://tezinfo.uz/uploads/companies/bBu2aiqtzPwFfZreSxTq.jpeg"
              alt=""
            />
          </div>
          <div className="rounded-2xl">
            <img
              className="h-48 w-full rounded-2xl "
              src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-48 w-full  "
              src="https://avatars.mds.yandex.net/get-altay/2816622/2a00000170d21aec7b5dcc9bd7b640bf762b/XXL"
              alt=""
            />
          </div>
        </Slider>
        <Link className="pl-0 m-0" to={"/"}>
          <Icon
            className="mr-3 text-[#fff] origin-top"
            size={"35px"}
            icon={ic_keyboard_backspace}
          />
        </Link>
      </div>

      <div className="flex p-3 ml-3 mr-3  rounded-2xl justify-between">
        {/* //  + person */}

        <div
          className="flex
              justify-between w-full"
        >
          <div className="w-5/6 ">
            <b className="text-2xl">Barbarela Inowa</b>
            <div className="flex mt-3">
              <PlaceIcon sx={{ color: "#FB9400 " }} />
              <p>0933 Novake Parkwary</p>
            </div>
            <div className="flex">
              <StarHalfIcon sx={{ color: "#FB9400 " }} />
              <p>4.8 (3.221 reviews)</p>
            </div>
          </div>
          <div className="flex w-1/6 justify-end">
            <Link
              to={"/salonprofel"}
              className="bg-[#FB9400] h-9 pl-5 pr-5 pt-1 pb-1 text-center rounded-3xl text-white py-2
                  hover:scale-105 duration-300"
            >
              Open
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-5 mr-5 ">
        <ul className="flex justify-between mb-4">
          <li className=" ">
            <Link className="m-0 text-center" to={"/haircuts"}>
              <div className="w-12 translate-y-5 rounded-full h-12 bg-[#FDF1DF] items-center  flex justify-center ">
                <LanguageIcon
                  color="action"
                  sx={{ fontSize: 24, color: "#FB9400 " }}
                />
              </div>
              <br />
              <p className="text-center text-xs">WebSite</p>
            </Link>
          </li>
          <li className=" ">
            <Link className="m-0 text-center" to={"/makeup"}>
              <div className="w-12 translate-y-5 rounded-full h-12 bg-[#FDF1DF] items-center  flex justify-center ">
                <ChatIcon
                  color="action"
                  sx={{ fontSize: 24, color: "#FB9400 " }}
                />
              </div>
              <br />
              <p className="text-center text-xs">Message</p>
            </Link>
          </li>
          <li className=" ">
            <Link className="m-0 text-center" to={"/manicure"}>
              <div className="w-12 translate-y-5 rounded-full h-12 bg-[#FDF1DF] items-center  flex justify-center ">
                <CallIcon
                  color="action"
                  sx={{ fontSize: 24, color: "#FB9400 " }}
                />
              </div>
              <br />
              <p className="text-center text-xs">Call</p>
            </Link>
          </li>
          <li className=" ">
            <Link className="m-0 text-center" to={"/ucaladki"}>
              <div className="w-12 translate-y-5 rounded-full h-12 bg-[#FDF1DF] items-center  flex justify-center ">
                <PlaceIcon
                  color="action"
                  // sx={{ color: "#FB9400 " }}
                  sx={{ fontSize: 24, color: "#FB9400 " }}
                />
              </div>
              <br />
              <p className="text-center text-xs">Diraction</p>
            </Link>
          </li>
          <li className=" ">
            <Link className="m-0 text-center" to={"/ucaladki"}>
              <div className="w-12 translate-y-5 rounded-full h-12 bg-[#FDF1DF] items-center  flex justify-center ">
                <SendIcon
                  color="action"
                  // sx={{ color: "#FB9400 " }}
                  sx={{ fontSize: 24, color: "#FB9400 " }}
                />
              </div>
              <br />
              <p className="text-center text-xs">Share</p>
            </Link>
          </li>
        </ul>
        <hr />
      </div>

      <div className="ml-5 mt-3 mb-5 mr-5">
        <div className="flex justify-between ">
          <b className="text-xl">Our Sprcialist</b>

          <Link to={"/logUp"} className=" text-[#FB9400] ">
            <b>See All</b>
          </Link>
        </div>

        <div className="profelMaster gap-1 flex">
          <div className="w-1/4 mb-2 profelMasterA bg-[#fafafa] rounded-xl">
            <img
              className="p-3 pb-1 w-full  rounded-2xl"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
            <b className="text-sm flex justify-center">Nathan</b>
            <p className="text-xs flex justify-center">Sr. Barber</p>
          </div>

          <div className="w-1/4 mb-2 profelMasterA bg-[#fafafa] rounded-xl">
            <img
              className="p-3 pb-1 w-full  rounded-2xl"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
            <b className="text-sm flex justify-center">Nathan</b>
            <p className="text-xs flex justify-center">Sr. Barber</p>
          </div>

          <div className="w-1/4 mb-2 profelMasterA bg-[#fafafa] rounded-xl">
            <img
              className="p-3 pb-1 w-full  rounded-2xl"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
            <b className="text-sm flex justify-center">Nathan</b>
            <p className="text-xs flex justify-center">Sr. Barber</p>
          </div>

          <div className="w-1/4 mb-2 profelMasterA bg-[#fafafa] rounded-xl">
            <img
              className="p-3 pb-1 w-full  rounded-2xl"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
            <b className="text-sm flex justify-center">Nathan</b>
            <p className="text-xs flex justify-center">Sr. Barber</p>
          </div>
        </div>
      </div>

      <div>
        <About />
        
      </div>
    </div>
  );
}
