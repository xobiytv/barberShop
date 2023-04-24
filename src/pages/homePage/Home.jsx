import React from "react";
import { UserAuth } from "../../context/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
// import Slider from "slick-carousel@1.8.1/slick/slick.css";
import Slider from "react-slick";
// import PollIcon from "@mui/icons-material/Poll";
import { Link } from "react-router-dom";
// import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
// import NoEncryptionGmailerrorredOutlinedIcon from "@mui/icons-material/NoEncryptionGmailerrorredOutlined";
// import SendTimeExtensionOutlinedIcon from "@mui/icons-material/SendTimeExtensionOutlined";
import Mybook from './componentBox/Mybook'
// import Nav from './componentBox/Nav'
import Navbar from './Navbar'
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import Face3Icon from "@mui/icons-material/Face3";
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import Face6Icon from "@mui/icons-material/Face6";
// import Footer from './Footer'

export default function Home() {
  const { user } = UserAuth();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full">
      <Navbar />
      <header>
        <div className=" flex justify-center w-full">
          <h1 className="font-bold grid-cols-1  mt-4  text-2xl text-[#000000]">
            Morning, {user?.displayName} 👋
          </h1>
        </div>
        <form class="flex flex-col  mt-5 w-full justify-start items-center ">
          <div class="relative border  w-80">
            <SearchIcon className="fa fa-user ml-2 mt-3 absolute text-primarycolor text-xl" />
            {/* <i></i> */}
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 w-full    l pt-2 pr-2 pb-2 border font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            />
          </div>
        </form>

        <div className="bg-[#FB9400] h-52 ml-4 mr-4 mt-8 rounded-2xl">
          <Slider className="bg-[#FB9400] rounded-2xl" {...settings}>
            <div>
              <div>
                <div className=" pr-3 pl-3 pt-7 flex w-full justify-between">
                  <div className="">
                    <p className="text-[#fff]">30% OFF</p>
                    <b className="text-xl text-[#fff]">Today's special</b>
                  </div>
                  <div className="rigth">
                    <b className="font-bold text-5xl color text-[#fff]">30%</b>
                  </div>
                </div>

                <div className="umumiy w-full pr-3  pt-3 pl-6">
                  <p className="text-[#fff]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet placeat nobis repellendus et.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className=" pr-3 pl-3 pt-7 flex w-full justify-between">
                  <div className="">
                    <p className="text-[#fff]">30% OFF</p>
                    <b className="text-xl text-[#fff]">Today's special</b>
                  </div>
                  <div className="rigth">
                    <b className="font-bold text-5xl color text-[#fff]">30%</b>
                  </div>
                </div>

                <div className="umumiy w-full pr-3  pt-3 pl-6">
                  <p className="text-[#fff]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet placeat nobis repellendus et.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className=" pr-3 pl-3 pt-7 flex w-full justify-between">
                  <div className="">
                    <p className="text-[#fff]">30% OFF</p>
                    <b className="text-xl text-[#fff]">Today's special</b>
                  </div>
                  <div className="rigth">
                    <b className="font-bold text-5xl color text-[#fff]">30%</b>
                  </div>
                </div>

                <div className="umumiy w-full pr-3  pt-3 pl-6">
                  <p className="text-[#fff]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet placeat nobis repellendus et.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className=" pr-3 pl-3 pt-7 flex w-full justify-between">
                  <div className="">
                    <p className="text-[#fff]">30% OFF</p>
                    <b className="text-xl text-[#fff]">Today's special</b>
                  </div>
                  <div className="rigth">
                    <b className="font-bold text-5xl color text-[#fff]">30%</b>
                  </div>
                </div>

                <div className="umumiy w-full pr-3  pt-3 pl-6">
                  <p className="text-[#fff]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet placeat nobis repellendus et.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className=" pr-3 pl-3 pt-7 flex w-full justify-between">
                  <div className="">
                    <p className="text-[#fff]">30% OFF</p>
                    <b className="text-xl text-[#fff]">Today's special</b>
                  </div>
                  <div className="rigth">
                    <b className="font-bold text-5xl color text-[#fff]">30%</b>
                  </div>
                </div>

                <div className="umumiy w-full pr-3  pt-3 pl-6">
                  <p className="text-[#fff]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eveniet placeat nobis repellendus et.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="ml-4 mr-4 ">
          <ul className="flex justify-between mb-4">
            <li className=" ">
              <Link className="m-0 text-center" to={"/haircuts"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#FDF1DF] items-center  flex justify-center ">
                  <Face6Icon
                    color="action"
                    sx={{ fontSize: 37, color: "#FB9400 " }}
                  />
                </div>
                <br />
                <b className="text-center">Haircuts</b>
              </Link>
            </li>
            <li className=" ">
              <Link className="m-0 text-center" to={"/makeup"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#FDF1DF] items-center  flex justify-center ">
                  <SignLanguageIcon
                    color="action"
                    sx={{ fontSize: 37, color: "#FB9400 " }}
                  />
                </div>
                <br />
                <b className="text-center">Make UP</b>
              </Link>
            </li>
            <li className=" ">
              <Link className="m-0 text-center" to={"/manicure"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#FDF1DF] items-center  flex justify-center ">
                  <CleanHandsIcon
                    color="action"
                    sx={{ fontSize: 37, color: "#FB9400 " }}
                  />
                </div>
                <br />
                <b className="text-center">Manicure</b>
              </Link>
            </li>
            <li className=" ">
              <Link className="m-0 text-center" to={"/ucaladki"}>
                <div className="w-16 translate-y-5 rounded-full h-16 bg-[#FDF1DF] items-center  flex justify-center ">
                  <Face3Icon
                    color="action"
                    // sx={{ color: "#FB9400 " }}
                    sx={{ fontSize: 37, color: "#FB9400 " }}
                  />
                </div>
                <br />
                <b className="text-center">Ukaladki</b>
              </Link>
            </li>
          </ul>
          <hr />
        </div>
      </header>
      <section>
        <div className="ml-5 mt-5 mb-5 mr-4">
          <div className="flex justify-between ">
            <b className="text-xl">Nearby Your Location</b>

            <Link to={"/logUp"} className=" text-[#FB9400] ">
              <b>See All</b>
            </Link>
          </div>
        </div>
        {/* <Nav />  */}
        <Mybook />
      </section>
      {/* <Footer/> */}
    </div>
  );
}
