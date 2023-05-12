import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

// import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { UserAuth } from "../../context/AuthContext";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export default function Navbars() {
    const { logOut } = UserAuth();

    const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <Box sx={{ flexGrow: 1 }} color="none">
      <AppBar position="static">
        <Toolbar className="bg-[#FB9400]">
          {/* <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge color="error">
              <ExitToAppIcon />
            </Badge>
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            MUI
          </Typography>
          {/* xs: "none" */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to={"/sigin"}>
                <ExitToAppIcon />
              </Link>
              {/* <Badge onClick={handleSignOut} color="error">
                
              </Badge> */}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to={"/beli"} badgeContent={17} color="error">
                <NotificationsIcon />
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to={"/mybookmark"} badgeContent={17} color="error">
                <BookmarkIcon />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
