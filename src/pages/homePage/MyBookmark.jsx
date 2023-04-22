import React from 'react'
import Nav from "./componentBox/Nav";
import Mybook from "./componentBox/Mybook";
// import SearchBox from "./componentBox/SearchBox";
import Footer from './Footer'
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";



export default function MyBookmark() {
  return (
    <div>
      <div>
        <h3 className="font-bold grid-cols-1  m-5 text-3xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          My bookmark
        </h3>
      </div>
      <Nav />

      <Mybook />
      {/* <SearchBox /> */}
      <Footer />
    </div>
  );
}
