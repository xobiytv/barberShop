import React from 'react'
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div
      className="flex justify-center"
      
    >
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/haircuts"}
        
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
        
      >
        Make UP
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/manicure"}
        
      >
        Manicure
      </Link>
      <Link
        className=" text-[#fb9400] text-center  p-2"
        to={"/ucaladki"}
        
      >
        Ukaladki
      </Link>
    </div>
  );
}
