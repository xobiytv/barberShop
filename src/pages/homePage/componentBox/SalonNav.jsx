import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About from './SalonProfel/About'
import Service  from './Service'
import Package from "./Package";
import Gallery from "./Gallery";
import ProfelNav from "./ProfelNav";
import Review from "./Review";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "#FB9400", textColor: "#FB9400" }}
        >
          <TabList
            onChange={handleChange}
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            indicatorColor="secondary"
            // sx={{ textColor: "#FB9400", indicatorColor: "#FB9400" }}
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Abut us" value="1" />
            <Tab label="Services" value="2" />
            <Tab label="Package" value="3" />
            <Tab label="Gallery" value="4" />
            <Tab label="Review" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About />
        </TabPanel>
        <TabPanel value="2">
          <Service />
        </TabPanel>
        <TabPanel value="3">
          <Package />
        </TabPanel>
        <TabPanel value="4">
          <Gallery />
        </TabPanel>
        <TabPanel value="5">
          <Review />
        </TabPanel>
      </TabContext>
      <ProfelNav />
    </Box>
  );
}
