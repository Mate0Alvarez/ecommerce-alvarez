import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLanding from './components/MainLanding/MainLanding';
import ItemListContainer from "./components/Items/ItemListContainer";
import CategoryListContainer from './components/Items/CategoryListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import CategoriesListContainer from './components/Categories/CategoriesListContainer';
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import NotFound from "./components/NotFound/NotFound";
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <CartContext>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/pieces" element={<ItemListContainer />} />
            <Route path="/categories" element={<CategoriesListContainer />} />
            <Route path="/category/:id" element={<CategoryListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </CartContext>
  );
}

export default App;
