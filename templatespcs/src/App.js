import SideBar from "./template18April/components/SideBar";
import HeaderBar from "./template18April/components/HeaderBar";
import Body from "./template18April/components/Body";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./template18April/customColors/ThemeAndColor";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="AppBar">
        <HeaderBar />
        <Body />
      </div>
    </div>
  );
}

export default App;
