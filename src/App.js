import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./pages/AddTask";
import AllTasks from "./pages/AllTasks";
function App() {
  return (
    <div>
      <nav className="bg-light pt-2 ">
        <ul className="nav nav-tabs px-2 ">
          <li className="nav-item ">
            <NavLink to={"/add"} className="nav-link text-dark">
              Add Task
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link text-dark">
              All tasks
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="container mt-3">
        <h1>React CRUD app sa realtime db</h1>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
