import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Grid from "@mui/material/Unstable_Grid2";


const drawerBleeding = 56;

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

function SwipeableEdgeDrawer(props) {
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
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
          className="translate-y-16"
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 7,
            height: "100%",
            overflow: "auto",
          }}
        >
          
          <div className=" flex justify-center pl-4">
            
            <Box  sx={{ width: "100%", text:'center' }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 1, md: 3 }}
            >
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <p>WhatsApp</p>
              </Grid>
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png"
                  alt=""
                />
                <p>Telegram</p>
              </Grid>
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>Twitter</p>
              </Grid>
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw"
                  alt=""
                />
                <p>Instagram</p>
              </Grid>
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
                  alt=""
                />
                <p>Facebook</p>
              </Grid>
              <Grid xs={4} sm={4} md={2}>
                <img
                  className="rounded-xl w-16"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>SMS</p>
              </Grid>
            </Grid>
          </Box>
          </div>
          
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}



export default SwipeableEdgeDrawer;
