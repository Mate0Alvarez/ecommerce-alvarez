import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddCartQuantity = (count) => {
    setCartQuantity(cartQuantity+count);
  }

  const handleRemoveCartQuantity = (count) => {
    setCartQuantity(cartQuantity-count);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar cartQuantity={cartQuantity}/>
      <ItemListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity}/>
    </ThemeProvider>
  );
}

export default App;
