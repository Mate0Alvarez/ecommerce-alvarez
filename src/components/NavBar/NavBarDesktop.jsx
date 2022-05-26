import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import CartWidget from "./CartWidget";
import NavBarAvatar from "./NavBarAvatar";

const NavBarDesktop = ({ pages, settings, cartQuantity }) => {
  return (
    <Toolbar
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 55,
          display: { xs: "none", md: "flex" },
        }}
        alt="NFT Commerce logo."
        src="./nft_logo.svg"
      />
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <Button key={index} sx={{ my: 2, color: "white", display: "block" }}>
            {page.text}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 90,
        }}
      >
        <Box>
          <CartWidget quantity={cartQuantity} />
        </Box>
        <Box>
          <NavBarAvatar avatarSettings={settings} />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default NavBarDesktop;
