import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login/login";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationPage from "./pages/registrationPage";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route path="/*" element={<div>Not found</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
