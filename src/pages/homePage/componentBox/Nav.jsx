import React from 'react'
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div
      className="flex justify-center"
      // showLabels
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
    >
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/haircuts"}
        // variant="outlined"
        // label="All"
      >
        All
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/haircuts"}
        // variant="outlined"
        // label="Haircuts"
      >
        Haircuts
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/makeup"}
        // variant="outlined"
        // label="Make UP"
      >
        Make UP
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/manicure"}
        // variant="outlined"
        // label="Manicure"
      >
        Manicure
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/ucaladki"}
        // variant="outlined"
        // label="Ukaladki"
      >
        Ukaladki
      </Link>
    </div>
  );
}
