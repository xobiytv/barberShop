import React from 'react'
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Service() {
  return (
    <div>
      <div className="flex justify-between ">
        <b className="text-xl">Our Sprcialist</b>

        <Link to={"/logUp"} className=" text-[#FB9400] ">
          <b>See All</b>
        </Link>
      </div>

      <div className="flex justify-between elevation=6">
        <p>Hait Cut</p>
        <div>
          <b>44 types</b>
          <ArrowRightIcon className=" text-[#FB9400] " />
        </div>
      </div>
    </div>
  );
}
