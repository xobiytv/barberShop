import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";

export default function Metods() {
   const [selectedValue, setSelectedValue] = React.useState("a");

   const handleChange = (event) => {
     setSelectedValue(event.target.value);
   };
  return (
    <div>
      <div>
        <h1 className="font-bold grid-cols-1  m-5 text-2xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/ourserice"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Payment Methods
        </h1>
      </div>
      <div>
        <div className="flex mr-4 ml-4 justify-between drop-shadow-xl bg-white mt-3 rounded-xl">
          <div className="w-1/6 flex items-center">
            <img
              className="rounded-xl "
              src="https://logos-world.net/wp-content/uploads/2020/04/PayPal-Symbol.png"
              alt=""
            />
          </div>
          <div className="w-4/6 flex items-center ml-2">
            <h4 className="font-bold  grid-cols-1 text-xl text-[#000000]">
              PayPal
            </h4>
          </div>{" "}
          <div className="w-1/6  flex justify-end mt-2">
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
                sx={{
                  color: ["#FB9400"],
                  "&.Mui-checked": { color: ["#FB9400"] },
                }}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
        </div>
        <div className="flex mr-4 ml-4 justify-between drop-shadow-xl bg-white mt-3 rounded-xl">
          <div className="w-1/6 flex items-center">
            <img
              className="rounded-xl "
              src="https://cutewallpaper.org/21/black-apple-logo/Download-for-free-10-PNG-Apple-logo-transparent-new-top-.png"
              alt=""
            />
          </div>
          <div className="w-4/6 flex items-center ml-2">
            <h4 className="font-bold  grid-cols-1 text-xl text-[#000000]">
              Apple Pay
            </h4>
          </div>{" "}
          <div className="w-1/6  flex justify-end mt-2">
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
                sx={{
                  color: ["#FB9400"],
                  "&.Mui-checked": { color: ["#FB9400"] },
                }}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
        </div>
        <div className="flex mr-4 ml-4 justify-between drop-shadow-xl bg-white mt-3 rounded-xl">
          <div className="w-1/6 flex items-center">
            <img
              className="rounded-xl "
              src="https://1000logos.net/wp-content/uploads/2016/11/Google-Symbol-2048x1280.png"
              alt=""
            />
          </div>
          <div className="w-4/6 flex items-center ml-2">
            <h3 className="font-bold  grid-cols-1 text-xl text-[#000000]">
              Google Pay
            </h3>
          </div>{" "}
          <div className="w-1/6  flex justify-end mt-2">
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
                sx={{
                  color: ["#FB9400"],
                  "&.Mui-checked": { color: ["#FB9400"] },
                }}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
        </div>
        <div className="flex mr-4 ml-4 justify-between drop-shadow-xl bg-white mt-3 rounded-xl">
          <div className="w-1/6 flex items-center">
            <img
              className="rounded-xl "
              src="https://logobank.uz:8005/media/logos_preview/Humo-01.jpg"
              alt=""
            />
          </div>
          <div className="w-4/6 flex items-center ml-2">
            <h4 className="font-bold  grid-cols-1 text-xl text-[#000000]">
              8600 **** **** 3231
            </h4>
          </div>{" "}
          <div className="w-1/6  flex justify-end mt-2">
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
                sx={{
                  color: ["#FB9400"],
                  "&.Mui-checked": { color: ["#FB9400"] },
                }}
              />
            </bottom>

            {/* <ArrowRightIcon className=" text-[#FB9400] " /> */}
          </div>
        </div>
        <div className="ml-4 mr-4 mb-5 bg-none">
          <Link
            to={"/"}
            variant="primary"
            type="Submit"
            className="text-[#FB9400] w-full mt-5 text-center rounded-3xl bg-[#FDF1DF] text-xl py-2 hover:scale-105 duration-300"
          >
            Add New Card
          </Link>
        </div>
      </div>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "none",
        }}
        // elevation={3}
      >
        <div className="ml-4 mr-4 mb-5 bg-none">
          <Link
            to={"/chake"}
            variant="primary"
            type="Submit"
            className="bg-[#FB9400] w-full mt-5 text-center rounded-3xl text-white text-xl py-2 hover:scale-105 duration-300"
          >
            Continue
          </Link>
        </div>
      </Paper>
    </div>
  );
}
