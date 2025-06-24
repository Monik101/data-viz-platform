import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/molecules/protected-route";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
