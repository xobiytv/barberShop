import React from 'react'
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";


export default function 
() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                inputProps={{ "aria-label": "C" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "d"}
                onChange={handleChange}
                value="d"
                name="radio-buttons"
                inputProps={{ "aria-label": "D" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "e"}
                onChange={handleChange}
                value="e"
                name="radio-buttons"
                inputProps={{ "aria-label": "E" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    
      <div className="flex justify-between drop-shadow-xl p-4 bg-white mt-3 rounded-xl">
        <div className="w-2/6 mr-2 rounded-xl items-center">
          <img
            className="rounded-xl"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
            alt=""
          />
        </div>

        <div className="w-3/6  ml-2">
          <div>
            <b className="font-extrabold">Undercut</b>
            <p>713 booked </p>
             <p className="text-[#FB9400]">$128</p>
          </div>
         
        </div> <div className="w-1/6  flex justify-end mt-2">
           
            <bottom
              // to={"/salonprofel"}
              className="pl-5 pr-5 pt-1 pb-1 text-end "
            >
              <Radio
                checked={selectedValue === "f"}
                onChange={handleChange}
                value="f"
                name="radio-buttons"
                inputProps={{ "aria-label": "F" }}
                 sx={{color: ['#FB9400'],'&.Mui-checked': { color: ['#FB9400']},}}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
      </div>
    </div>
  );
}
