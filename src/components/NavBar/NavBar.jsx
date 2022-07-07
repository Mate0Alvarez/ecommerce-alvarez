import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import NavBarMobile from "./NavBarMobile";
import NavBarDesktop from "./NavBarDesktop";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const LinkWithoutDec = (props)=>{
  return <Link {...props} style={{textDecoration:"none", color:"unset"}}></Link>
};

const pages = [
  {
    icon: <BakeryDiningOutlinedIcon />,
    link: <LinkWithoutDec to="/pieces">Pieces</LinkWithoutDec>,
    link_desktop: <Button sx={{ my: 2, color: "white", display: "block" }}><LinkWithoutDec to="/pieces">Pieces</LinkWithoutDec></Button>
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    link: <LinkWithoutDec to="/categories">Categories</LinkWithoutDec>,
    link_desktop: <Button sx={{ my: 2, color: "white", display: "block" }}><LinkWithoutDec to="/categories">Categories</LinkWithoutDec></Button>
  }
];

const NavBar = () => {
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
            <NavBarMobile navPages={pages}/>
          </Box>
          <Box
            sx={{
              display: { sm: "none", md: "block" },
            }}
          >
            <NavBarDesktop
              pages={pages}
            />
          </Box>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
