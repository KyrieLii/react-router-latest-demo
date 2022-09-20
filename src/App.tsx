import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import About from "./About";
import Dashboard from "./Dashboard";

const Root = () => (
  <>
    === root ===
    <ul>
      <Link to="/about">about</Link>
      <br />
      <Link to="/dashboard">dashboard</Link>
    </ul>
  </>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Root />}>
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default App;
