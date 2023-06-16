import React from "react";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import CallIcon from "@mui/icons-material/Call";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Message() {
  return (
    <div className="">
      <div className="flex justify-between items-center mr-3 ">
        <h1 className="font-bold items-center flex grid-cols-1 gap-2  m-5 text-xl text-[#000000]">
          {/* <Link className="pl-0 m-0" to={"/"}>
            <Icon className="mr-3" size={"30px"} icon={ic_keyboard_backspace} />
          </Link> */}
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
              />
            </StyledBadge>
          </Stack>
          Barberrlla Inova
        </h1>
        <Link to={"/call"}>
          <CallIcon className="mr-3" size={"30px"} />
        </Link>
      </div>

      <div class="min-h-screen flex ">
        <div class="flex flex-col flex-grow bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="flex flex-col flex-grow h-0 mb-14 p-4 overflow-auto">
            <div class="flex  mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                {" "}
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-[#FB9400] text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span class="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <Avatar
                  alt="Remy Sharp"
                  // src="https://images.squarespace-cdn.com/content/v1/58ab108715d5db737e6a49a3/1508490792241-X8DCZOG3LTGQZCSSSCB1/esquire-gentlemens-barbers.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 w-full">
          <div class="flex items-center bg-[#fff] justify-start  p-3 border-t border-gray-300">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </button>

          
            <input
              type="text"
              placeholder="Message"
              class="block w-96 py-2  pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              required
              // sx={{ width: "100wh" }}
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
            <button type="submit">
              <svg
                class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
