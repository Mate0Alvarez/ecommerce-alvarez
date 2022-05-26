import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const cartSettings = ["See full cart", "Check Out"];

function CartWidget({ quantity }) {
  const [anchorElCart, setAnchorElCart] = React.useState(null);

  const handleOpenCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };
  return (
    <>
      <Tooltip title="Shopping cart" style={{ cursor: "pointer" }}>
        <IconButton onClick={handleOpenCartMenu}>
          <Badge badgeContent={quantity} color="info">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElCart}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElCart)}
        onClose={handleCloseCartMenu}
      >
        {cartSettings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseCartMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default CartWidget;
