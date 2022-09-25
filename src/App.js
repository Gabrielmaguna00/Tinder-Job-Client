import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={"elemnt"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
