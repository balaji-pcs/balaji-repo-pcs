import { ThemeProvider } from "@mui/material";

import "./App.css";
import AppNavigation from "./components/AppBar/AppNavigation";
import Body from "./components/HirePageComp/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AppNavigation />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
