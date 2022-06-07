import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const LinkWithoutDec = (props)=>{
  return <Link {...props} style={{textDecoration:"none", color:"unset"}}>Pieces</Link>
};

const pages = [
  {
    icon: <BakeryDiningOutlinedIcon />,
    link: <LinkWithoutDec to="/pieces">Pieces</LinkWithoutDec>,
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    link: <LinkWithoutDec to="/pricing">Pricing</LinkWithoutDec>,
  },
  {
    icon: <InfoOutlinedIcon />,
    link: <LinkWithoutDec to="/about">About us</LinkWithoutDec>,
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
