import React, { useEffect } from "react";
// import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { LogIn } from "./LogIn";
import { Link } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <div>
      {/* <LogIn /> */}
      <section className=" min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}

        <div className=" flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <div className=" mb-7 ">
              <img
                className="rounded-2xl"
                src="https://avatars.mds.yandex.net/i?id=445189a8bd14f109c4392c1d56a8b0f1-4809949-images-thumbs&n=13"
              />
            </div>
            <h1 className="font-bold text-center text-4xl text-[#000000]">
              Let's you in
            </h1>
            {/* <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p> */}
            <button
              onClick={handleGoogleSignIn}
              className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
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
              Continue with Google
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
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
              Continue with Facebook
            </button>
            <div className="mt-7 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <form action="" className="flex flex-col mt-7 gap-4">
              <Link
                class="bg-[#FB9400] text-center rounded-xl text-white py-2 hover:scale-105 duration-300"
                to={"/logIn"}
              >
                LogIn with password
              </Link>
              {/* <button  >
                
              </button> */}
            </form>

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
};

export default Signin;
