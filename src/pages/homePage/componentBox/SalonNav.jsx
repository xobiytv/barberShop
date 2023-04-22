import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import About from './About'
import Service  from './Service'
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Abut us" value="1" />
            <Tab label="Services" value="2" />
            <Tab label="Package" value="3" />
            <Tab label="Gallery" value="4" />
            <Tab label="Review" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><About/></TabPanel>
        <TabPanel value="2"><Service/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
