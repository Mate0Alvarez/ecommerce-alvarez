import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLanding from './components/MainLanding/MainLanding';
import ItemListContainer from "./components/Items/ItemListContainer";
import CategoryListContainer from './components/Items/CategoryListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CategoriesListContainer from './components/Categories/CategoriesListContainer';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import NotFound from "./components/NotFound/NotFound";

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
          <Route exact path="/" element={<MainLanding onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
          <Route exact path="/pieces" element={<ItemListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
          <Route exact path="/categories" element={<CategoriesListContainer />} />
          <Route exact path="/category/:id" element={<CategoryListContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
          <Route exact path="/item/:productId" element={<ItemDetailContainer onAdd={handleAddCartQuantity} onRemove={handleRemoveCartQuantity} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>

  );
}

export default App;
