import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const user = 'USER';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <ItemListContainer greeting={user}/>
    </ThemeProvider>
  );
}

export default App;
