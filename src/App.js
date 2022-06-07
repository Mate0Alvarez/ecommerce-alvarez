import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import NavBar from "./components/NavBar/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddCartQuantity = (count) => {
    setCartQuantity(cartQuantity + count);
  }

  const handleRemoveCartQuantity = (count) => {
    setCartQuantity(cartQuantity - count);
  }

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <NavBar cartQuantity={cartQuantity} />
        <Routes>
          <Route exact path="/" element={<ItemListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
          <Route exact path="/item/:productId" element={<ItemDetailContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
        </Routes>
      </ThemeProvider>
    </Router>

  );
}

export default App;
