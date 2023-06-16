import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BookApply() {
   const middleDate = dayjs(new Date().setMonth(6));
// const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <h1 className="font-bold grid-cols-1  m-5 text-2xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/salonprofel"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Book Appointerment
        </h1>
      </div>
      <div className="m-5">
        <div>
          <b className="text-xl">O'zingizga mos kunni tanlang</b>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker minDate={middleDate} />
          </LocalizationProvider>
        </div>
        <div className="flex justify-between ">
          <b className="text-xl">O'zingizga mos vaqtni tanlang</b>

          <Link className=" text-[#FB9400] ">
            <b>Umummiy</b>
          </Link>
        </div>

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="8:00" />
            <Tab label="9:00" />
            <Tab label="10:00" />
            <Tab label="11:00" />
            <Tab label="12:00" />
            <Tab label="13:00" />
            <Tab label="14:00" />
            <Tab label="15:00" />
          </Tabs>
        </Box>

        <div className="">
          <div className="flex justify-between mb-5">
            <b className="text-xl">Barcha masterlar</b>

            <Link to={"/logUp"} className=" text-[#FB9400] ">
              <b>Umummiy</b>
            </Link>
          </div>

          <div className="profelMaster gap-1 mb-24 flex">
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
        <div className="ml-5 mr-5 mb-5 bg-none">
          <Link
            to={"/paymentmethods"}
            variant="primary"
            type="Submit"
            className="bg-[#FB9400] w-full mt-5 text-center rounded-3xl text-white text-xl py-2 hover:scale-105 duration-300"
          >
            Davom etish
          </Link>
        </div>
      </Paper>
    </div>
  );
}
