import React from 'react'
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Radio from "@mui/material/Radio";


export default function Language() {
    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/profel "}>
            <Icon className="mr-4" size={"30px"} icon={ic_keyboard_backspace} />
            Language
          </Link>
        </h1>
      </div>
      <div>
        <div className="flex justify-between itmes-center ml-5">
          <p className="font-medium">O`zbek</p>{" "}
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
        </div>

        <div className="flex justify-between itmes-center ml-5">
          <p className="font-medium">Rus</p>{" "}
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
              sx={{
                color: ["#FB9400"],
                "&.Mui-checked": { color: ["#FB9400"] },
              }}
            />
          </bottom>
        </div>

        <div className="flex justify-between itmes-center ml-5">
          <p className="font-medium">English</p>{" "}
          <bottom
            // to={"/salonprofel"}
            className="pl-5 pr-5 pt-1 pb-1 text-end "
          >
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "D" }}
              sx={{
                color: ["#FB9400"],
                "&.Mui-checked": { color: ["#FB9400"] },
              }}
            />
          </bottom>
        </div>
      </div>
    </div>
  );
}
