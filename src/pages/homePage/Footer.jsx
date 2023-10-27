import  React from "react";
import MessageIcon from "@mui/icons-material/Message";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";


export default function Footer() {

      const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Paper
      sx={{margin: 0, position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <div className="w-full flex justify-center gap-10 ml-0 m-3">
        <Link to={"/"} label="Home">
          <HomeIcon sx={{ fontSize: 25, color: "#FB9400 " }} />
        </Link>
        <Link to={"/explore"} label="Explore">
          <LocationOnIcon sx={{ fontSize: 25, color: "#FB9400 " }} />
        </Link>
        <Link to={"/mybooking"} label="Booking">
          <LibraryBooksIcon sx={{ fontSize: 25, color: "#FB9400 " }} />
        </Link>
        <Link to={"/inbox"} label="Inbox">
          <MessageIcon sx={{ fontSize: 25, color: "#FB9400 " }} />
        </Link>
        <Link to={"/profel"} label="Profile">
          <PersonIcon sx={{ fontSize: 25, color: "#FB9400 " }} />
        </Link>
      </div> 
      
    </Paper>
  );
}
