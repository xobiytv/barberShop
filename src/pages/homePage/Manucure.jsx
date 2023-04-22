import React from "react";
import Footer from "./Footer";
import Mybook from "./componentBox/Mybook";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import SearchIcon from "@mui/icons-material/Search";

export default function Haircuts() {
  return (
    <div>
      <div>
        <h3 className="font-bold grid-cols-1  m-5 text-3xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Manicure
        </h3>
      </div>
      <form class="flex flex-col mb-5 mt-5 w-96 justify-start items-center ">
        <div class="relative border ">
          <SearchIcon className="fa fa-user ml-2 mt-3 absolute text-primarycolor text-xl" />
          {/* <i></i> */}
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 w-80 pt-2 pr-2 pb-2 border font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
      </form>

      <Mybook />
      <Footer />
    </div>
  );
}
