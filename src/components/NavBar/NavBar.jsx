import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const pages = [
  {
    icon: <BakeryDiningOutlinedIcon />,
    text: "Pieces",
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    text: "Pricing",
  },
  {
    icon: <InfoOutlinedIcon />,
    text: "About us",
  },
];
const settings = ["Profile", "Logout"];

const NavBar = ({cartQuantity}) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Box
            sx={{
              display: { sm: "flex", md: "none" },
            }}
          >
            <NavBarMobile navPages={pages} cartQuantity={cartQuantity} />
          </Box>
          <Box
            sx={{
              display: { sm: "none", md: "block" },
            }}
          >
            <NavBarDesktop
              pages={pages}
              settings={settings}
              cartQuantity={cartQuantity}
            />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
