import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/CartContext";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";


function CartWidget() {
  const [cartMenu, setCartMenu] = useState(null);
  const [emptyCartMenu, setEmptyCartMenu] = useState(null);

  const { cartQuantity } = useContext(MyContext);

  const handleOpenCartMenu = (event) => {
    if (cartQuantity === 0) {
      return setEmptyCartMenu(event.currentTarget);
    }
    return setCartMenu(event.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setCartMenu(null);
    setEmptyCartMenu(null);
  };
  return (
    <>
      <Tooltip title="Shopping cart" style={{ cursor: "pointer" }}>
        <IconButton onClick={handleOpenCartMenu}>
          <Badge badgeContent={cartQuantity} color="info">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={emptyCartMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(emptyCartMenu)}
        onClose={handleCloseCartMenu}
      >
        <MenuItem onClick={handleCloseCartMenu}>
          <Typography textAlign="center" sx={{ width: 170, display: "flex", justifyContent: "space-around", alignItems: "center" }}><span>Your cart is empty</span><SentimentVeryDissatisfiedIcon /></Typography>
        </MenuItem>
      </Menu>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={cartMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(cartMenu)}
        onClose={handleCloseCartMenu}
      >
        <MenuItem onClick={handleCloseCartMenu}>
          <Typography textAlign="center" sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "unset",
                display: "flex",
                justifyContent: "space-around",
                width: "120px",
              }}
            ><ShoppingCartRounded />Checkout
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default CartWidget;
