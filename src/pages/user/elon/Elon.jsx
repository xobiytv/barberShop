import Navbar from "../../../components/user/navbar/Navbar";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Faol from "./Faol";
import Tolanmagan from "./Tolanmagan";
import Kutilayotgan from "./Kutilayotgan";
import Nofaol from "./Nofaol";
import Radetilgan from "./Nofaol";

// import Footer from "../homePage/Footer";
// import Upcoming from "./Upcoming";
// import Completed from "./Completed";
// import Cancelled from "./Cancelled";

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
    <div className="flex ">
      <Navbar />

      <div className="mt-16">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Faol" {...a11yProps(0)} />
          <Tab label="To`lanmagan" {...a11yProps(1)} />
          <Tab label="Kutilayotgan" {...a11yProps(2)} />
          <Tab label="Nofaol" {...a11yProps(3)} />
          {/* <Tab label="Rad etilgan" {...a11yProps(4)} /> */}
        </Tabs>

        <TabPanel value={value} index={0}>
          <Faol />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tolanmagan />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Kutilayotgan />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Radetilgan />
        </TabPanel>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
