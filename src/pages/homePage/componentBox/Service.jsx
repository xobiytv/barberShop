import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Service() {
  return (
    <div className="bg-[#fff]">
      <div className="flex justify-between ">
        <b className="text-xl">Our Service</b>

        <Link to={"/logUp"} className=" text-[#FB9400] ">
          <b>See All</b>
        </Link>
      </div>

      <Link to={"/ourserice"}>
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Hait Cut</p>
          <div>
            <b>44 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>
      <Link to={"/ourserice"}>
        {" "}
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Hait Coloring</p>
          <div>
            <b>12 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>

      <Link to={"/ourserice"}>
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Hait Wash</p>
          <div>
            <b>8 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>

      <Link to={"/ourserice"}>
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Shoving</p>
          <div>
            <b>22 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>

      <Link to={"/ourserice"}>
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Skin Care</p>
          <div>
            <b>12 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>

      <Link to={"/ourserice"}>
        <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
          <p>Hair Dreyr</p>
          <div>
            <b>4 types</b>
            <ArrowRightIcon className=" text-[#FB9400] " />
          </div>
        </div>
      </Link>

      <Link to={"/ourserice"}> <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <p>Face Make Up</p>
        <div>
          <b>18 types</b>
          <ArrowRightIcon className=" text-[#FB9400] " />
        </div>
      </div></Link>

     
    </div>
  );
}
