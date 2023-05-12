import React, { useState } from "react";
// import { UserAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { LogIn } from "../regiter/LogIn";
// import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";

const EditProfel = () => {
  return (
    <div>
      <div className="flex justify-between content-center  items-center mr-3CallIcon">
        <h1 className="font-bold grid-cols-1  m-5 text-xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/profel "}>
            <Icon className="mr-4" size={"30px"} icon={ic_keyboard_backspace} />
            Edit Profel
          </Link>
        </h1>
      </div>

      <div className=" px-8 text-xl">
        <form className="flex  flex-col  gap-4">
          <div></div>
          <input
            className="p-2  rounded-xl border"
            type="text"
            name="name"
            placeholder="Full name"
          />

          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="user_name"
            placeholder="User name"
          />
          <input
            className="p-2 rounded-xl border w-full"
            type="date"
            name="data"
            placeholder="Data"
          />

          <input
            className="p-2 rounded-xl border w-full"
            type="number"
            name="number"
            placeholder="Phone number"
          />
          <input
            className="p-2 rounded-xl border w-full"
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="p-2  rounded-xl border"
            type="password"
            name="password"
            placeholder="Password"
          />
          <select
            name="gender"
            className="p-2  rounded-xl border"
            id="inputAdult"
          >
            <option name="male" value="male" selected="">
              Male
            </option>
            <option name="giol" value="giol">
              Giol
            </option>
          </select>
          <select
            name="gender"
            className="p-2  rounded-xl border"
            id="inputAdult"
          >
            <option name="" value="" selected="">
              Chilonzor tuman
            </option>
            <option name="" value="">
              Sergili tuman
            </option>
            <option name="" value="">
              Shayhontoxur tuman
            </option>
            <option name="" value="">
              Yunsobot tuman
            </option>
            <option name="" value="">
              Olmazor tuman
            </option>
            <option name="" value="">
              Mirzo Ulug`bek` tuman
            </option>
          </select>
          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="adress"
            placeholder="Adress"
          />

          <button
            variant="primary"
            type="submit"
            className="bg-[#FB9400] text-center rounded-3xl text-white py-2 hover:scale-105 duration-300"
          >
            Update
          </button>

          {/* <button  >
                
              </button> */}
        </form>
      </div>
    </div>
  );
};
export default EditProfel;
