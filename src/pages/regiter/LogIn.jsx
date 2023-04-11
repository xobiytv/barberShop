import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { LogIn } from "../regiter/LogIn";
// import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { Link, useNavigate } from "react-router-dom";
// import {  Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";

export default function () {
  const { googleSignIn, user, logIn } = UserAuth();
  const navigate = useNavigate();

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  // email register
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
  //  const { logIn, googleSignIn } = useUserAuth();
  //  const navigate = useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();
     setError("");
     try {
       await logIn(email, password);
       navigate("/account");
     } catch (err) {
       setError(err.message);
     }
   };

   const handleGoogleSignIn = async (e) => {
     e.preventDefault();
     try {
       await googleSignIn();
       navigate("/account");
     } catch (error) {
      
     }
   };


  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}

        <div className=" flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <Link className="pl-0 m-0" to={"/"}>
              <Icon size={"30px"} icon={ic_keyboard_backspace} />
            </Link>
            <h1 className="font-bold text-center text-4xl text-[#000000]">
              Create your Account
            </h1>
            {/* <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p> */}

            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col mt-7 gap-4"
            >
              {/* {error && <Alert variant="danger">{error}</Alert>} */}
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="user_name"
                placeholder="User name"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <div className="flex justify-center">
                <input
                  type="checkbox"
                  id="vehicle1"
                  className="color-[#FB9400] border-4 w-5 mr-2"
                  name="vehicle1"
                  value="true"
                />
                <label for="vehicle1">Remember me</label>
              </div>

              <button
                variant="primary"
                type="Submit"
                class="bg-[#FB9400] text-center rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Log In
              </button>
              {/* <button  >
                
              </button> */}
            </form>
            <div className="mt-7 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleGoogleSignIn}
                className="bg-white border py-2 w-28 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
              >
                <svg
                  className="mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="25px"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="bg-white border py-2 w-28 rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
              >
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 32 32"
                  className="mr-3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      fill="url(#paint0_linear_87_7208)"
                    ></circle>{" "}
                    <path
                      d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                      fill="white"
                    ></path>{" "}
                    <defs>
                      {" "}
                      <linearGradient
                        id="paint0_linear_87_7208"
                        x1="16"
                        y1="2"
                        x2="16"
                        y2="29.917"
                        gradientUnits="userSpaceOnUse"
                      >
                        {" "}
                        <stop stop-color="#18ACFE"></stop>{" "}
                        <stop offset="1" stop-color="#0163E0"></stop>{" "}
                      </linearGradient>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              </button>
            </div>

            <div className="mt-7 mb-7 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <Link
                to={"/logUp"}
                className="py-2 text-center px-5 text-[#FB9400]  rounded-xl hover:scale-110 duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://i.pinimg.com/originals/75/78/42/7578424126c4475a9ce0ee17084e3649.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
