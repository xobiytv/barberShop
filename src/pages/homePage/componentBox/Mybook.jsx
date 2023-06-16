import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import PlaceIcon from "@mui/icons-material/Place";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
// import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
// import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";


const drawerBleeding = 1;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(20)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}
// function refreshMessages() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => messageExamples[getRandomInt(messageExamples.length)]
//   );
// }

export default function FixedBottomNavigation(props) {
  const [selectedObject, setSelectedObject] = useState(null);
  const handleClick = (index) => {
    setSelectedObject(messageExamples[index]);
  };

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Box sx={{ pb: 7 }} ref={ref}>
        <List>
          {messageExamples.map((message, index) => (
            <div
              className="flex p-3 ml-5 mb-5 mr-5 bg-[#FDF1DF] rounded-2xl justify-between"
              // key={index}
              // onClick={() => handleClick(index)}
            >
              {/* //  + person */}

              <div
                onClick={toggleDrawer(true)}
                className="flex
              justify-between w-full"
              >
                <div className="w-2/6 mr-2">
                  <ListItemAvatar>
                    <img
                      className="w-24 h-24 rounded-2xl"
                      src={message.person}
                      alt="Profile Picture"
                    />
                    {/* <Avatar alt="Profile Picture" src={person} /> */}
                  </ListItemAvatar>
                </div>
                <Link className="w-3/6" to={"/salonprofel"}>
                 
                  <ListItemText
                    primary={message.primary}
                    secondary={message.secondary}
                  />
                  <div className="flex m gap-3 justify-start">
                    <p>
                      {message.iconA}
                      {message.km} km
                    </p>
                    <p>
                      {message.iconB} {message.statistic}
                    </p>
                  </div>
                </Link>
                <div className="flex w-1/6 justify-end">
                  <BookmarkAddIcon sx={{ color: "#FB9400 " }} />
                </div>
              </div>
            </div>
          ))}
        </List>
      </Box>
    </Root>
  );
}
FixedBottomNavigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary: "0933 Novake Parkwary",
    person:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Birthday Gift",
    secondary: `Jizzax orom bozor 23-uy`,
    person:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Recipe to try",
    secondary: "Jizzax I Karimov ko`chasi 34-uy",
    person:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Yes!",
    secondary: "0933 Novake Parkwary",
    person:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU",
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Doctor's Appointment",
    secondary: "Jizzax Shahar hokimyati 1-qavat",
    person:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKAeFAiWBu1T0cNCnFGGnR8vKl6aEojjW--mR39LATQlFm34o3uVLUmzjKV_gGpnKWB-Y&usqp=CAU",
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Discussion",
    secondary: `Sh. Rashidov tumani H. Olimjon ko'chasi 39-uy`,
    person:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPIyqWfILYR2-i9tXjJxSA_SrgclY9z5Y1GSsQe5BIlOmHTGyqUegnK-8OrmKUCB-CCI&usqp=CAU",
  },
  {
    km: 1.3,
    statistic: 3.8,
    iconA: <PlaceIcon sx={{ color: "#FB9400 " }} />,
    iconB: <StarHalfIcon sx={{ color: "#FB9400 " }} />,
    primary: "Summer BBQ",
    secondary: `Jizzax shahar haliq banki`,
    person: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
  },
];
