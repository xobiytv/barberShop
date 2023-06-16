import React from "react";
import Footer from "./Footer";
// import { UserAuth } from "../../context/AuthContext";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
// import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
// import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
export default function Beli() {
  const messages = [
    {
      id: 1,
      primary: "Toʻlov muvaffaqiyatli amalga oshirildi",
      secondary: "Sizda salon to'lovi rejimi mavjud",
      person: (
        <AccountBalanceWalletIcon sx={{ fontSize: 37, color: "#fff " }} />
      ),
      utl: "/balans",
      clasn:
        "w-20  rounded-full h-20 bg-[#FB9400] items-center  flex justify-center ",
    },
    {
      id: 2,
      primary: "Yangi xizmatlar mavjud",
      secondary: `Siz eng yaqin salonni qidirishingiz mumkin`,
      person: <AddBoxIcon sx={{ fontSize: 37, color: "#fff " }} />,
      clasn:
        "w-20  rounded-full h-20 bg-[#FF7589] items-center  flex justify-center ",
      utl: "/seric",
    },
    {
      id: 3,
      primary: "Bugungi maxsus takliflar",
      secondary: "Bugun siz maxsus promoga ega bo'lasiz",
      person: <LocalActivityIcon sx={{ fontSize: 37, color: "#fff " }} />,
      utl: "/offer",
      clasn:
        "w-20  rounded-full h-20 bg-[#FDDA50] items-center  flex justify-center ",
    },
    {
      id: 4,
      primary: "Kredit karta ulandi!",
      secondary: "Kredit karta ulandi",
      person: <AddCardIcon sx={{ fontSize: 37, color: "#fff " }} />,
      utl: "/card",
      clasn:
        "w-20  rounded-full h-20 bg-[#5E92FE] items-center  flex justify-center ",
    },
    {
      id: 5,
      primary: "Hisob sozlandi!",
      secondary: "Hisob qaydnomangiz yaratildi!",
      person: <PersonIcon sx={{ fontSize: 37, color: "#fff " }} />,
      utl: "/profel",
      clasn:
        "w-20  rounded-full h-20 bg-[#4ADE80] items-center  flex justify-center ",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="font-bold grid-cols-1  m-5 text-3xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Profel
        </h1>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person, url, clasn }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}

              <Link to={url}>
                <ListItem
                  button
                  className="flex gap-3  p-3 ml-5 mb-5 mr-5 bg-[#FDF1DF] rounded-2xl justify-between"
                >
                  <ListItemAvatar>
                    <div className={clasn}>
                      {person}
                    </div>
                    {/* <Avatar alt="Profile Picture" src= /> */}
                  </ListItemAvatar>
                  <ListItemText
                    className="mt-5"
                    primary={primary}
                    secondary={secondary}
                  />
                </ListItem>
              </Link>
            </React.Fragment>
          ))}
        </List>
      </div>
      <Footer />
    </div>
  );
}
