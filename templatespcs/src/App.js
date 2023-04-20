import { ThemeProvider } from "@mui/material";

import "./App.css";
import AppNavigation from "./components/AppBar/AppNavigation";
import Body from "./components/HirePageComp/Body";

function App() {
  return (
    <div className="App">
      <AppNavigation />
      <Body />
    </div>
  );
}

export default App;
