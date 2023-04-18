import logo from "./logo.svg";
import "./App.css";
import SideBar from "./template18April/components/SideBar";
import HeaderBar from "./template18April/components/HeaderBar";
import Body from "./template18April/components/Body";

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
