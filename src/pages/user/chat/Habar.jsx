import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminCalls from "./AdminCalls";
import AdminChats from "./AdminChats";
import Navbar from "../../../components/user/navbar/Navbar";
import AdminMessage from "./Message";

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
    <div className="flex ">
      <Navbar />
      <div className="flex w-full mt-14">
        <div className="w-12/12">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Suhbatlar" {...a11yProps(0)} />
            <Tab label="Qo'ng'roqlar" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <AdminChats />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AdminCalls />
          </TabPanel>
        </div>

        <div className="w-full">
          <AdminMessage />
        </div>
      </div>
    </div>
  );
}
