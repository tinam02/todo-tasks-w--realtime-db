import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./pages/AddTask";
function App() {
  return (
    <div>
      <nav className="navbar navbar-extend navbar-primary bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={"/add"} className="nav-link">
              Add Task
            </NavLink>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h1>React CRUD app sa realtime db</h1>
        <Routes>
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
