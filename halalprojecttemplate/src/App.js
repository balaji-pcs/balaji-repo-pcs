import './App.css';
import AppBody from './app/projectTab/containers/AppBody';
import AppLeftSideBar from './app/projectTab/containers/AppLeftSideBar';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (<BrowserRouter>
    <AppLeftSideBar/>
    <AppBody/>
    </BrowserRouter>);
}

export default App;
