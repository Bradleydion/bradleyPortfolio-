import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
