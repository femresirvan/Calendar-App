import Login from "./components/login";
import "./styles/app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./components/calendar";

function App() {
  return (
    <Router>
      <div className="hero">
        <Routes>
          <Route path="" element={<Login className="login-wrapper" />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
