import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ic_keyboard_backspace } from "react-icons-kit/md/ic_keyboard_backspace";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import Man from './Man'
import ServerNav from "./ServerNav";
import Women from "./Women";
// import Button from "@mui/material/Button";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <h1 className="font-bold grid-cols-1  m-5 text-3xl text-[#000000]">
          <Link className="pl-0 m-0" to={"/salonprofel"}>
            <Icon className="mr-3" size={"40px"} icon={ic_keyboard_backspace} />
          </Link>
          Haircuts
        </h1>
      </div>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Man" {...a11yProps(0)} />
          <Tab label="Women" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Man />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Women />
      </TabPanel>

      <ServerNav />
    </Box>
  );
}
