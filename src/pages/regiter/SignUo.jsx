import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { LogIn } from "../regiter/LogIn";
// import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { pencil } from "react-icons-kit/fa/pencil";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
// import Avtar from "../../components/img/user_avatar.png";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link, useNavigate } from "react-router-dom";
// import { Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { useUserAuth } from "../context/UserAuthContext";

const SignUp = () => {
  // email
  // const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // const [data, setData] = useState("");
  // const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  const { signUp } = UserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/logIn");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center">
        {/* <!-- login container --> */}

        <div className=" flex rounded-2xl shadow-lg max-w-5xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 text-xl md:px-16">
            <h2 className="font-bold mt-5 flex  text-3xl text-[#000000]">
              <Link className="pl-0 m-0" to={"/logIn"}>
                <Icon
                  className="mr-3"
                  size={"40px"}
                  icon={ic_keyboard_backspace}
                />
              </Link>
              Fill your profile
            </h2>
            {/* <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p> */}
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex  flex-col  gap-4"
            >
              <div className="w-32 translate-x-1/2    flex  rounded-xl  ">
                <img
                  className="w-full object-cover rounded-full"
                  src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
                  alt="Avatar Upload"
                />
                <label className="cursor-pointer translate-y-24 ">
                  <span
                    style={{ color: "#fff" }}
                    className="focus:outline-none  bg-[#FB9400] rounded-xl  justify-end   py-1 px-2  hover:shadow-lg"
                  >
                    <Icon size={"100%"} icon={pencil} />
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div>
                
              </div>
              <input
                className="p-2 mt-3 rounded-xl border"
                type="text"
                name="name"
                placeholder="Full name"
                // onChange={(e) => setFullName(e.target.value)}
              />

              <input
                className="p-2 rounded-xl border w-full"
                type="text"
                name="user_name"
                placeholder="User name"
                // onChange={(e) => setEmail(e.target.value)}
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
                // onChange={(e) => setNumber(e.target.value)}
              />

              <input
                className="p-2  rounded-xl border"
                type="password"
                name="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
              />
              <select
                name="gender"
                className="p-2  rounded-xl border"
                id="inputAdult"
                // onChange={(e) => setGender(e.target.value)}
              >
                <option name="" value="" selected="">
                  Male
                </option>
                <option name="en" value="Ingliz tili">
                  Giol
                </option>
              </select>

              <button
                variant="primary"
                type="submit"
                className="bg-[#FB9400] text-center rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign up
              </button>

              {/* <button  >
                
              </button> */}
            </form>
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
export default SignUp;
